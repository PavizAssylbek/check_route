import moment from 'moment';

export const getReactColumns = (items: any) => {
  return items.reduce((acc: any, item: any) => {
    if (!item.isVisible) return acc;

    switch (item.fieldType) {
      case 'DICT':
        return [
          ...acc,
          {
            ...item,
            title: item.displayName,
            dataIndex: item.fieldName,
            key: item.fieldName,
          },
        ];

      case 'DATETIME':
        return [
          ...acc,
          {
            ...item,
            title: item.displayName,
            dataIndex: item.fieldName,
            key: item.fieldName,
            render: (d: any) => convertDate(d),
          },
        ];

      case 'DATE':
        return [
          ...acc,
          {
            ...item,
            title: item.displayName,
            dataIndex: item.fieldName,
            key: item.fieldName,
            render: (d: any) => convertDate(d),
          },
        ];

      default:
        return [
          ...acc,
          {
            ...item,
            title: item.displayName,
            dataIndex: item.fieldName,
            key: item.fieldName,
          },
        ];
    }
  }, []);
};

export const convertDate = (date: any) => {
  if (!date) return '';
  if (date.length < 11) return date;
  const stillUtc = moment.utc(date).toDate();
  const local = moment(stillUtc).local().format('DD.MM.YYYY HH:mm:ss');
  return local;
};
