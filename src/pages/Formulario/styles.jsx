import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';




export const Container = styled.div`
    padding: 30px;
    background:#666;
    h2 {
        margin-bottom: 10px;
    }


`;

export const InputContent = styled.div`


   display:flex;
   justify-content:space-between;
   align-items: center;
   background:#666;

   input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            margin-bottom: 10px

        }
    a {
        text-decoration:none;
    }

        button {
            display:flex;
            text-align: center;
            justify-items:center;
            align-items:center;
            background: #fff;
            border:0;
            padding:6px;
            border-radius:50%
        }
`;


export const LinkNavigation = styled(Link)`


  text-decoration:none;


`;


