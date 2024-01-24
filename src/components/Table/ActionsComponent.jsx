import React from 'react';
import Button from '@mui/material/Button';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ButtonGroup from '@mui/material/ButtonGroup';
const deleteItem = (id) => {
    let result = confirm(`Are you sure you want to delete ${id}`);
    if(result){
        alert("Item deleted successfully.")
    } else {
        alert("item not deleted.")
    }
}
// edit item
const editItem = (id) => {
    alert(id);
}

// view item
const viewItem = (id) => {
    alert(id);
}
const ActionsComponents = ({id}) => {
    return (
        <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button color='primary' onClick={() => viewItem(id)} ><VisibilityRoundedIcon/></Button>
        <Button color='success' onClick={() => editItem(id)}><EditRoundedIcon/></Button>
        <Button color='error' onClick={() => deleteItem(id)}><DeleteOutlineRoundedIcon/></Button>
      </ButtonGroup>
    );
};
export default ActionsComponents;