import { ApplicationDataType } from "../types/ApplicationData.type"

export const getAllApplications = () => {
    return fetch("http://localhost:4000/api/applications/")
        .then(res => res.json())
}

export const getSingleApplication = (id: string) => {
    return fetch("http://localhost:4000/api/applications/" + id)
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
    return fetch("http://localhost:4000/api/applications/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })
}

export const deleteApplication = (id: string) => {
    return fetch("http://localhost:4000/api/applications/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export const postSignUp = (email: string, password: string) => {
    return fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password })
    })
}

export const postLogIn = (email: string, password: string) => {
    return fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password })
    })
}