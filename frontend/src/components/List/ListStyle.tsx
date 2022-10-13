import { styled } from "@mui/material";

export const MainList = styled('ul')`
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(9)};
    
    ${({ theme }) => theme.breakpoints.down('md')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(8)};
    }
`;

export const EmptyList = styled('h2')`
    width: 100%;
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20, 2, 20, 2)};
`;

export const ListItem = styled('li')`
    list-style: none;
`;

export const ItemPhoto = styled('img')`
`;

export const ItemInfo = styled('div')`
`;

export const ItemName = styled('h3')`
    margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;


export const ItemPrice = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
`;

export const ItemDescription = styled('p')`
    word-break: break-word;
`;