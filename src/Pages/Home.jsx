import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { Query } from "appwrite"
import { useState, useEffect } from "react"

export function Home (props){
    const[data, setData]=useState([])
    const[loaded,setLoaded]=useState(false)

    document.title="The best drink in town"

    const database=props.db
    const storage=props.str

    const getData=async()=>{
        const result=await database.listDocuments(
            '6746c690003c8fa6501b',//database id
            '6746c6e6001e529634cd',//collection id
            []//query id 
        )
        setData( result.documents )
        setLoaded(true)
    }

    useEffect(()=>{ getData(), [data]})

    const ProductCollection=data.map((p)=>{
        //return each producvt as a col
            //get preview of image
        const imgURL=storage.getFileView(
            '6746d622001e23ae2874',//bucket id
            p.image//file ID
        )
        return(
        <Col md={2}>
            <img className="img-fluid" src={imgURL}/>
            <h3>{p.name}</h3>
            <h5>{p.price}</h5>
            <p>{p.description}</p>
        </Col>
        )
    })

    return(
        <Container>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
            </Row> 
            <Row>{ProductCollection}</Row>   
        </Container>
    )
}