interface Props {
  url: string;
  tagType: 'default' | 'small';
}

function openTab(props: Props) {
  const { url, tagType = 'default' } = props;
  // 新建标签页打开
  if (tagType === 'default') {
    window.open(url, '_blank');
  } else if (tagType === 'small') {
    //新建无状态小窗口打开
    window.open(
      url,
      '_blank',
      'width=800,height=600,top=150,left=300,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,modal=false,alwaysRaised=yes',
    );
  }
}

export default openTab;
