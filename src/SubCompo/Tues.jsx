import AccessTimeIcon from '@material-ui/icons/AccessTime';

const Tues= () =>{
    return <>     <div className=''>
    <div className='r_class class_info box__shadow'>
        <h4>Compiler Design</h4>
        <p>CSE331</p>
        <p>Teacher Initial : AAM</p>
        <p className='time'><span><AccessTimeIcon/></span>1:00PM-2:30PM</p>
    </div>

    <div className='r_class class_info box__shadow'>
        <h4>Software Engineering</h4>
        <p>CSE333</p>
        <p>Teacher Initial : AMM</p>
        <p className='time'><span><AccessTimeIcon/></span>2:30PM-4:00PM</p>
    </div>

    <div className='r_class class_info box__shadow'>
            <h4>Accounting</h4>
            <p>Act301</p>
            <p>Teacher Initial : DMAH</p>
            <p className='time'><span><AccessTimeIcon/></span>4:00PM-5:30AM</p>
        </div>

    
</div></>
}

export default Tues