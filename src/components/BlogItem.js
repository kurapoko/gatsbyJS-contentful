import React from "react"
import { Card } from 'react-bootstrap'
import { Link } from 'gatsby'

function BlogItem({title, data, src}) {
    return (
        <Card className="mt-4">
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {data}
                </Card.Text>
                <Link to="">see more</Link>
            </Card.Body>
        </Card>
    )
}

export default BlogItem