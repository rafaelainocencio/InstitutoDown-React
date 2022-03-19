import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../Components/pagination";
import { VagaPage } from "../../Components/Types/vagas";
import VagaCard from "../../Components/VagaCard";
import { BASE_URL } from "../../Utils/requests";


function Vagas() {


    const [pageNumber, setPageNumber] = useState(0);
    const [page, setPage] = useState<VagaPage>({

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
        axios.get(`${BASE_URL}/vagas?size=6&page=${pageNumber}`)
            .then(response => {
                const data = response.data as VagaPage;
                setPage(data)
            })
    }, [pageNumber])

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber)
    }

    return (
        <div >
            <div className="container desContainer">

                <div className="container Vaga-contanainer row">
                    {page.content.map(Vaga => (

                        <VagaCard key={Vaga.id} Vaga={Vaga} />
                    ))}
                </div>

            </div>
            <div className="container pagination-container">
                <Pagination page={page} onChange={handlePageChange} />
            </div>
        </div>
    );
}

export default Vagas;