import React from 'react';
import CustomePrimaryButton from '../../shared/components/CustomPrimaryButton'


const additionalStyles = {

    marginTop:'10px',
    marginLeft:'5px',
    width:'80%',
    height:'30px',
    background:'#3ba55d',
}


const AddFriendButton = ()=>{

    const handleOpenAddFriendDialog = () =>{

    };

    return (
        <>
            <CustomePrimaryButton 
                additionalStyles={additionalStyles}
                label = 'Add Friend'
                onClick={handleOpenAddFriendDialog}
            />
        </>
    );
};

export default AddFriendButton;