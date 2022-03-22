import LivroCard from "../../Components/LivroCard";

import { useEffect, useState } from "react";

import "../../index.css";
import Pagination from "../../Components/paginationLivro";
import { LivroPage } from "../../Components/Types/livros";
import axios from "axios";
import { BASE_URL } from "../../Utils/requests";

function Livros() {


    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<LivroPage>({

        "content": [],
        "last": true,
        "totalElements": 0,
        "totalPages": 0,
        "size": 2,
        "number": 0,
        "first": true,
        "numberOfElements": 0,
        "empty": true

    });

    useEffect(() => {
        axios.get(`${BASE_URL}/livros?size=6&page=${pageNumber}`)
            .then(response => {
                const data = response.data as LivroPage;
                setPage(data)
            })
    }, [pageNumber])

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber)
    }

    return (
        <div >
            <div className="container liContainer">
            <h1>E-books</h1>
                <div className="container Livro-contanainer row">
                    {page.content.map(Livro => (

                        <LivroCard key={Livro.id} Livro={Livro} />
                    ))}
                </div>
                        <h1>E-books</h1>

            </div>
            <div className="container pagination-container">
                <Pagination page={page} onChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Livros;