import React from 'react'
import { Link } from 'react-router-dom'
import contents from '../Fakedb'
function Homenews() {
  return (
    <div className="container">
    <div className="my-box-shadow my-3 rounded-3 rounded-bottom-3  card">
        <div className="text-center text-capitalize card-header">
            <Link>latest news </Link>/&nbsp;<Link>twitter</Link>&nbsp;/&nbsp;<Link>facebook</Link>&nbsp;/&nbsp;
            <Link>how to advertise</Link>
        </div>
      
        {contents.map((item)=>(
            <div className="card-body p-0 naira-bg  text-center"><span className="user-link">»</span><Link to={`/details/${item.id}`}> {item.title}</Link> <span className="user-link">«</span><hr/></div>
        )
        
        

        )}
        <div className="card-header  my-pagination-footer  rounded-3 text-center"> 
        (<Link>1</Link>)(<Link>2</Link>)(<Link>3</Link>)(<Link>4</Link>)(<Link>5</Link>)
        (<Link>6</Link>)(<Link>7</Link>)(<Link>8</Link>)(<Link>9</Link>)
        </div>

        
    </div>
    
    </div>
  )
}

export default Homenews

