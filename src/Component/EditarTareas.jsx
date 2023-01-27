import {useState} from 'react'
import {axios} from 'axios'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export function EditarTareas(){
    const endpoint=''
const [nombre, setNombre] = useState('')
const [estado, setEstado] = useState(false)
const navigate = useNavigate('')

const update= async (e)=>{
    e.preventDefault();
await axios.put(`${endpoint}/${id}`,{nombre:nombre, estado:estado})
useNavigate('/')
} 

const show=async()=>{
  const response =  await axios.get(`${endpoint}${id}`)
    setNombre(response.data.nombre)
    setEstado(response.data.estado)
}
useEffect(()=>{
    show()
}, []
)

return (<>
<div>
    <h1>Editar Tareas</h1>
</div>
<div>
<form onSubmit={update}>
<label>Ingrese el nombre a cambiar</label><br/>
<input type="text" value={nombre} onChange={(e)=>setNombre(e.target.value)} /><br/>
<label>Cambiar Estado</label><br/>
<label>completo</label><br/>
<input type="radio" id='0' onChange={(e)=>setEstado(e.target.value)} value={estado}/><br/>
<label>incompleto</label><br/>
<input type="radio" id='1' onChange={(e)=>setEstado(e.target.value)} value={estado}/><br/>
<button>Guardar Cambios</button>
</form>
</div>
</>
)
}