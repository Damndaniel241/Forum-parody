import React, { useEffect } from 'react'
import { useQuill } from 'react-quilljs';
import Topheader from '../components/Topheader';
import Bottomfooter from '../components/Bottomfooter';

function CreateArticle() {



    const { quill, quillRef } = useQuill();
   
    useEffect(()=>{
   
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
              quill.root.dataset.placeholder = 'write something here.....';
                console.log(quill.root.innerHTML);
          })
        }
    },[quill])

  return (
    <div className='create'>
      <Topheader/>
      <h1 className="text-center">Create A Post</h1>
        <div className="container naira-bg my-5 p-4 rounded-3 my-box-shadow  ">
          <p></p>
            <form>
                <div>
                    <div class="mb-3">
                      <label for="" class="form-label">Title</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                
                    </div>
                </div>
                <div>
                    <div class="mb-3">
                      <label for="" class="form-label">Main Photo</label>
                      <input type="file"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                
                    </div>
                </div>
                <div>
                    <div class="mb-3">
                      <label for="" class="form-label">Other Photo</label>
                      <input type="file"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
                
                    </div>
                </div>
                <div className="mt-3" >
      <div ref={quillRef} />
    </div>
      <button type="submit" className="btn btn-primary naira-green mt-3">Post</button>
            </form>
        </div>
        <Bottomfooter/>
    </div>
  
  )
}

export default CreateArticle