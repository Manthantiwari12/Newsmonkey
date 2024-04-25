import React from 'react'

const Newsitem =(props)=>{

   
        let { title, description, imageurl, newsurl, author, date, source } = props;
        return (

            <div className='my-3 ' style={{ alignItems: 'center' }}>
                <div className="card" >
                    <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:0}}>
                        <span className="badge rounded-pill bg-danger">
                            {source}
                        </span>
                    </div>
                    <img src={imageurl} className="card-img-top" alt="Error in loading" height="200px" width="250px" />

                    <div className="card-body">
                        <div style={{ height: '15rem' }}>
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className='card-text' ><small>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        </div>
                        <a href={newsurl} rel='noreferrer' target='_blank' className="btn btn-dark btn-sm">Read More</a>
                    </div>

                </div>
            </div>
        )
    
}

export default Newsitem
