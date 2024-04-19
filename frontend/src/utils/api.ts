import { ApplicationDataType } from "../types/ApplicationData.type"

export const postFormData = (formData: ApplicationDataType): Promise<ApplicationDataType> => {
    return fetch("http://localhost:4000/api/applications/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
}