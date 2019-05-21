import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #FFDD0D;
  padding-left: 10px;
  padding-right: 10px;
  border-bottom-color: #DDDDDD;
  border-bottom-width: 0.5;
`;

export const MenuButton = styled.TouchableOpacity`
`;


export const BackButton = styled.TouchableOpacity`
`;

export const SearchInput = styled.TextInput`
    width: 40%;
    text-align: center;
    align-content: center;
    font-size: 16px;
    font-weight: 300;
    border-bottom-width: 0.8px;
    border-bottom-color: #3D3D3D;
`;

export const SearchButton = styled.TouchableOpacity`
`;
