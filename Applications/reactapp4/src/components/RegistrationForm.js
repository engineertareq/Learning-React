import React, { use, useState } from 'react'

function RegistrationForm() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    return (

        <>
            <div>RegistrationForm</div>
            <form>
                <input type='text' name='fullname' onChange={handleChange} placeholder='Enter Full Name' /> <br />
                <input type='number' name='age' onChange={handleChange} placeholder='Enter Age' /> <br />
                <select name='district' onChange={handleChange}>
                    <option value='dhaka'>Dhaka</option>
                    <option value='chittagong'>Chittagong</option>
                    <option value='sylhet'>Sylhet</option>
                </select> <br />
                {console.log(inputs)}
            </form>
        </>
    )
}

export default RegistrationForm