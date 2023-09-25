import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3500/api/',
})

export const HeroesApi = {


    PostHero (payload)  {
        return (
            instance.post(`heroes/`, payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }})
        )
            .then(response => response.data)
    },
    GetHeroes (currentPage, pageSize)  {
        return (
            instance.get(`/byPage?page=${currentPage}&count=${pageSize}`)
        )
            .then(response => response.data)
    },
    GetHero(id, func){
        return ( instance.get(`/heroes/${id}`))
        .then(response=>func? func(response.data): response.data)
    },
    PutHero(payload){
        console.log(payload)
        return ( instance.put(`/heroes/`, payload))
        .then(response=>response.data)
    },
    DeleteHero(id){
        return ( instance.delete(`/heroes/${id}`))
        .then(response=> response.data)
    },
} 



export const Unfollow = (id) => {
    return (
        instance.delete(`follow/${id}`)
    )
        .then(response => response.data)
}


export const Follow = (id) => {
    return (
        instance.post(`follow/${id}`)
    )
        .then(response => response.data)
}

export const ProfileApi = {

   savePhoto(ava) {
        const formData = new FormData();
        formData.append("image", ava )
         return (
            instance.put(`profile/photo/`,formData, {
                headers:{
                'Content-Type': 'multipart/form-data'
            }})
        )
            .then(response => response.data)
    },

     SetStatus(status) {
        return (
            instance.put(`profile/status/`, { status })
        )
            .then(response => response.data)
    },

    GetStatus(id) {
        return (instance.get(`profile/status/${id}`))
            .then(response => response.data)
    },

    GetUserRpofile(userid, func) {
        return (instance.get(`profile/ ${userid}`))
            .then(response => func? func(response.data): response.data);
    },
}

export const AuthApi = {
    Login(email, password, rememberMe) {
        return (

            instance.post(`auth/login/`, { email, password, rememberMe })
        )
            .then(response => response.data)
    },

    Logout() {
        return (instance.delete(`auth/login`))

            .then(response => response.data)

    },

    GetAuthUserData() {
        return (instance.get(`auth/me`))

            .then(response => response.data);
    }
}

