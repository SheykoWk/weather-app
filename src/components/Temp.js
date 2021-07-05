import { useState } from 'react'

const Temp = ({tempCelsious, tempFarenheit}) => {
    const [celsious, setCelsious] = useState(true);
    return(
        <div>
            <h5>{celsious ? tempCelsious : tempFarenheit} {celsious ? "C" : "F"} </h5>
            <button onClick={() => setCelsious(!celsious)}>Degrees C/F</button>
        </div>
    )    
}
export default Temp