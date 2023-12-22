import Axios from 'axios'

export const Insert = (val)=>{
    return url.post("api/student/insert",val)
}

export const View = ()=>{
    return url.get("api/student/view")
}

export const Delete = (id)=>{
    return url.delete(`api/student/delete/${id}`)
}

export const SingleView = (id)=>{
    return url.get(`api/student/viewOne/${id}`)
}

const url = Axios.create({
    baseURL:"http://127.0.0.1:7000"
}
)