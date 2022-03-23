import { type } from "os";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { VagaPage } from "../Types/vagas";
import './style.css'



type Props = {
    page: VagaPage,
    onChange: Function;
}

function PaginationVaga({page, onChange}: Props){
    return(
        <div className="pagination">
            <button className="btn btn-primary" disabled={page.first} 
            onClick={() => onChange(page.number - 1)}><FiArrowLeft /></button>
            <h1>{`${page.number + 1} de ${page.totalPages}`}</h1>
            <button className="btn btn-primary" disabled={page.last} onClick={() => onChange(page.number + 1)}><FiArrowRight/></button>
        </div>
    );
}

export default PaginationVaga;