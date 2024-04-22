import { ApplicationDataType } from "../types/ApplicationData.type"

export const getAllApplications = () => {
    return fetch("http://localhost:4000/api/applications/")
        .then(res => res.json())
}

export const getSingleApplication = (id: string) => {
    return fetch("http://localhost:4000/api/applications/"+id)
        .then(res => res.json())
}

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

export const updateFormData = (formData: ApplicationDataType, id: string): Promise<Response> => {
    return fetch("http://localhost:4000/api/applications/"+id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
}