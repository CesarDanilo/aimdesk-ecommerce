import axios from "axios";

export default async function functionCreateUserDialog(data) {
    try {
        const response = await axios.post('http://localhost:3001/users/auth/createuser', data);
        console.log('Usuário criado com sucesso:', response.data);
    }
    catch (error) {
        console.error('Erro ao criar usuário:', error.response.data);
        console.error('Erro ao criar usuário:', data);
    }
}