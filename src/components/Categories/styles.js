import styled from 'styled-components/native';

export const Container = styled.View`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      background: #FFDD0d;
`;

export const Category = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;

`;

export const CategoryText = styled.Text`
    font-size: 10px;
    color: #3D3D3D;
`;