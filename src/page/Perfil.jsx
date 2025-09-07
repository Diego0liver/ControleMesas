import MenuLateral from "../components/menu/MenuLateral.jsx";
import React, { useState } from "react";
import API from "../db/api.jsx";
import swal from "sweetalert";

const Ajuste = () => {
    const [file, setFile] = useState(null);
    const [avatarUrl, setAvatarUrl] = useState(null);

    const avatarUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await API.post("/avatar", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                },
            });

            setAvatarUrl(res.data.url);
            swal("Ok!", "Avatar atualizado com sucesso!", "success");
            console.log(res.data);
        } catch (err) {
            swal("Error!", "Preencha os campos!", "warning");
            console.error(err);
        }
    };

    return (
        <>
            <MenuLateral />
            <h1>Perfil</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // centraliza horizontal
                    justifyContent: "center", // centraliza vertical
                    marginTop: "50px",
                }}
            >
                <label>Avatar:</label>
                <input
                    style={{
                        marginBottom: "30px",
                        padding: "10px 20px",
                    }}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <button
                    className='btn btn-success m-0'
                    onClick={avatarUpload}
                >
                    Enviar Avatar
                </button>
            </div>
        </>
    );
};

export default Ajuste;
