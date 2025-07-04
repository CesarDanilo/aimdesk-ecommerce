import axios from "axios";

export default async function functionCreateUserDialog(data) {
    try {
        const response = await axios.post('http://localhost:3001/users', data);
        console.log('Usuário criado com sucesso:', response.data);
    }
    catch (error) {
        console.error('Erro ao criar usuário:', error);
    }
}