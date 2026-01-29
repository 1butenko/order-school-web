const NOTION_API_KEY = process.env.NOTION_API_KEY!;
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID!;
const NOTION_VERSION = "2022-06-28";

export interface Module {
    id: string;
    moduleId: number;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface NotionProperty {
    id: string;
    type: string;
    [key: string]: any;
}

function getPropertyValue(property: NotionProperty | undefined): any {
    if (!property) return "";

    switch (property.type) {
        case "title":
            return property.title?.[0]?.plain_text || "";
        case "rich_text":
            return property.rich_text?.map((t: any) => t.plain_text).join("") || "";
        case "date":
            return {
                start: property.date?.start || "",
                end: property.date?.end || "",
            };
        case "select":
            return property.select?.name || "";
        case "status":
            return property.status?.name || "";
        case "unique_id":
            return property.unique_id?.number || 0;
        default:
            return "";
    }
}

export async function getModules(): Promise<Module[]> {
    try {
        const response = await fetch(
            `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${NOTION_API_KEY}`,
                    "Notion-Version": NOTION_VERSION,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sorts: [
                        {
                            property: "Start Date",
                            direction: "ascending",
                        },
                    ],
                }),
                next: { revalidate: 60 },
            }
        );

        if (!response.ok) {
            const error = await response.json();
            throw new Error(`Notion API error: ${error.message || response.statusText}`);
        }

        const data = await response.json();

        const modules: Module[] = data.results
            .map((page: any) => {
                const properties = page.properties;
                return {
                    id: page.id,
                    moduleId: getPropertyValue(properties["Module ID"]),
                    title: getPropertyValue(properties["Title"]) || "",
                    startDate: getPropertyValue(properties["Start Date"])?.start || "",
                    endDate: getPropertyValue(properties["End Date"])?.start || "",
                    // Handle "Description " with trailing space as seen in Notion API response
                    description: getPropertyValue(properties["Description"] || properties["Description "]) || "",
                    status: getPropertyValue(properties["Status"]),
                };
            })
            // Filter out modules that are explicitly marked as "Draft"
            .filter((module: any) => module.status !== "Draft");

        return modules;
    } catch (error) {
        console.error("Error fetching from Notion:", error);
        throw error;
    }
}