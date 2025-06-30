import styled from 'styled-components';





export const StyledButton = styled.button`
  padding: 5px 10px;
    border: none;
    background-color: #0C831F;
    color: white;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

  &:hover {
      background-color: black;
    color: white;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
  }
      &:focus {
    outline: none;
}
    &:active {
    background-color: black;
    color: white;
    border-radius: 8px;
    font-size: 15px;
    font-weight: bold;
}
`;

export const ProductItems = styled.div`
    border: 1px solid #ccc;
    flex-basis: 15%;
    padding: 10px;
    margin: 1% 0;
    box-shadow: 0 0 10px 2px #ccc;
    border-radius: 15px;
    p {
   text-align: left;
   margin: 8px 0;
   font-size: 13px;
}
   h3 {
    font-size: 13px;
    color: black;
    font-weight: bold;
    text-align: left;
}
   
   
    
`;

export const ProductItemsImg = styled.div`
        display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
   
    .img {
        width: 70%;
        height: auto;
        border-radius: 10px;}

}
   
`;  

export const ProductTime = styled.span`
    font-size: 15px;
    color: gray;
    padding: 5px 0 ;

    border-radius: 5%;
    text-align: left;
    display: flex;

   
`;

export const ProductItemsText = styled.div`

    margin: 6px 0;

`;
export const ProductAdd = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

     b {
    font-size: 13px;
}
`;