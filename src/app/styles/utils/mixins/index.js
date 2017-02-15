export const flexDefault = (justifyContent='flex-start', alignItems='center') => {
  return {
    display: 'flex',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
};

export const flexColumn = (justifyContent='flex-start', alignItems='center') => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: justifyContent,
    alignItems: alignItems,
  };
};

export const flexCenter = () => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

export const formCard = () => {
  return {
    width: 400,
    height: 550,
    borderRadius: 6,
    backgroundColor: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
  }
};

