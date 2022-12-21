import styled from "styled-components";

export const BurguerCard = styled.li`
  min-width: 250px;
  max-width: 250px;
  height: 326px;

  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 14px;

  border: 2px solid var(--color-grey-2);
  border-radius: 5px;
`;

export const ItemImage = styled.div`
  width: 100%;
  height: 150px;

  background: var(--color-grey-0);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemName = styled.h2`
  width: 90%;

  font-weight: 700;
  font-size: 18pt;
  line-height: 24px;

  color: var(--color-grey-100);
`;

export const ItemType = styled.p`
  width: 90%;

  font-weight: 400;
  font-size: 12pt;
  line-height: 16px;

  color: var(--color-grey-50);
`;

export const ItemValue = styled.p`
  width: 90%;

  font-weight: 600;
  font-size: 14pt;
  line-height: 24px;

  color: var(--color-primary);
`;
