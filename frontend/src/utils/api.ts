import { ApplicationDataType } from "../types/ApplicationData.type"


export const getAllApplications = (token: string) => {
    return fetch("http://localhost:4000/api/applications/", {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })
        .then(res => res.json())
}

export const getSingleApplication = (id: string, token:string) => {
    return fetch("http://localhost:4000/api/applications/" + id, {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    })
        .then(res => res.json())
}

export const postFormData = (formData: ApplicationDataType, token: string): Promise<ApplicationDataType> => {
    return fetch("http://localhost:4000/api/applications/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer: ${token}`
        },
        body: JSON.stringify({...formData})
    })
        .then(res => res.json())
}

export const updateFormData = (formData: ApplicationDataType, id: string, token:string): Promise<Response> => {
    return fetch("http://localhost:4000/api/applications/" + id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer: ${token}`
        },
        body: JSON.stringify(formData)
    })
}

export const deleteApplication = (id: string, token: string) => {
    return fetch("http://localhost:4000/api/applications/" + id, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer: ${token}`
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