
import { client } from "@/sanity/lib/client";

interface Ibook {
    prise: number,
    auther: string,
    name: string,
   
  }


export default async function Home() {

  let res:Ibook[] =await client.fetch(`*[_type == 'book']`)
  console.log(res);


  return (
   <div> 
    {
      res.map((data)=>{
        return( 
        
          <div>
                   <h1> {data.name} {data.prise} {data.auther} </h1> 
          </div>
      
        )
      }
      )
    }
   </div>
  );
} 