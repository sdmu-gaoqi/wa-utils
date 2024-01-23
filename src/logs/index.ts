import { isEmpty } from 'lodash';

const data = {
  id: 1,
  appKey: 'cspro',
  status: 1,
  mode: 0,
  sort: 0,
  entry: 'https://assets-test.papegames.com/gos-dev/cspro/index.html',
  name: '客服系统',
  icon: 'https://platform-docs.diezhi.net/yesio/yesio.png',
  groupType: 0,
  tags: [],
  desc: '客服管理系统',
  i18n: {
    name: {
      'zh-CN': '客服系统',
      'zh-TW': '客服系統',
      'en-US': 'customer service system',
      'ja-JP': 'カスタマーサービスシステム',
      'ko-KR': '고객 서비스 시스템',
    },
    desc: {
      'zh-CN': '客服管理系统',
      'zh-TW': '客服系統',
      'en-US': 'customer service system',
      'ja-JP': 'カスタマーサービスシステム',
      'ko-KR': '고객 서비스 시스템',
    },
  },
  routes: [
    {
      id: 1,
      parentId: null,
      appId: 1,
      appKey: 'cspro',
      path: '/report',
      name: '举报管理',
      icon: 'https://assets-test.papegames.com/resources/cdn/25bc43e443bfe7ebf5900959a22511701705388525275.svg',
      avatar: '',
      sort: 2,
      type: 0,
      isMoudle: 1,
      status: 1,
      queryParam: '',
      component: '',
      url: '',
      tip: '',
      isBlank: 0,
      desc: '',
      i18n: {
        name: {
          'zh-CN': '举报管理',
          'zh-TW': '檢舉管理',
          'en-US': 'Manage Reports',
          'ja-JP': '通報管理',
          'ko-KR': '신고 관리',
        },
        desc: {
          'zh-CN': '',
        },
        tip: {
          'zh-CN': '',
        },
      },
      perms: [],
      children: [
        {
          id: 239,
          parentId: 1,
          appId: 1,
          appKey: 'cspro',
          path: '/ceshihaha',
          name: '测试数据哈哈',
          icon: '',
          avatar: '',
          sort: 0,
          type: 0,
          isMoudle: 0,
          status: 1,
          queryParam: '',
          component: '',
          url: '',
          tip: '',
          isBlank: 0,
          desc: '',
          i18n: {
            name: {
              'zh-CN': '测试数据哈哈',
              'zh-TW': '',
              'en-US': '',
              'ja-JP': '',
              'ko-KR': '',
            },
          },
          perms: [],
        },
        {
          id: 208,
          parentId: 1,
          appId: 1,
          appKey: 'cspro',
          path: '/report/conf',
          name: '相关配置',
          icon: '',
          avatar: '',
          sort: 1,
          type: 0,
          isMoudle: 0,
          status: 1,
          queryParam: '',
          component: '',
          url: '',
          tip: '',
          isBlank: 0,
          desc: '',
          i18n: {
            name: {
              'zh-CN': '相关配置',
              'zh-TW': '相關配置',
              'en-US': 'related configuration',
              'ja-JP': '関連する設定',
              'ko-KR': '관련 구성',
            },
            desc: {
              'zh-CN': '',
              'zh-TW': '',
              'en-US': '',
              'ja-JP': '',
              'ko-KR': '',
            },
          },
          perms: [],
          children: [
            {
              id: 235,
              parentId: 208,
              appId: 1,
              appKey: 'cspro',
              path: '/s1',
              name: '测试数据',
              icon: '',
              avatar: '',
              sort: 0,
              type: 0,
              isMoudle: 1,
              status: 1,
              queryParam: '',
              component: '',
              url: '',
              tip: '',
              isBlank: 0,
              desc: '',
              i18n: {
                name: {
                  'zh-CN': '测试数据',
                  'zh-TW': '',
                  'en-US': '',
                  'ja-JP': '',
                  'ko-KR': '',
                },
              },
              perms: [],
            },
          ],
        },
      ],
    },
    {
      id: 106,
      parentId: null,
      appId: 1,
      appKey: 'cspro',
      path: '/redeem-key-activity',
      name: '兑换码活动管理',
      icon: 'https://assets-test.papegames.com/resources/cdn/2c00ead8bc26533cd5b171352e94dc7f1701086477683.svg',
      avatar:
        'https://assets-test.papegames.com/resources/cdn/4c8593c230e5ad6f6280fa23450d1cf71705472249968.png',
      sort: 1,
      type: 0,
      isMoudle: 1,
      status: 1,
      queryParam: '',
      component: '',
      url: '',
      tip: '',
      isBlank: 0,
      desc: '',
      i18n: {
        name: {
          'zh-CN': '兑换码活动管理',
        },
        desc: {
          'zh-CN': '',
        },
        tip: {
          'zh-CN': '',
        },
      },
      perms: [],
      children: [
        {
          id: 107,
          parentId: 106,
          appId: 1,
          appKey: 'cspro',
          path: '/redeem-key-activity/list',
          name: '兑换码活动',
          icon: '',
          avatar: '',
          sort: 0,
          type: 1,
          isMoudle: 0,
          status: 1,
          queryParam: '',
          component: '',
          url: '',
          tip: '',
          isBlank: 0,
          desc: '',
          i18n: null,
          perms: [
            {
              id: 72,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '查看',
              tip: '查看兑换码活动',
              sort: 99,
              type: 0,
              perm: '/redeem-key-activity/list',
              i18n: null,
            },
            {
              id: 73,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '添加',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/get',
              i18n: null,
            },
            {
              id: 74,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '新增',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/create',
              i18n: null,
            },
            {
              id: 75,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '编辑',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/edit',
              i18n: null,
            },
            {
              id: 76,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '删除',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/del',
              i18n: null,
            },
            {
              id: 77,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '导入角色',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/import',
              i18n: null,
            },
            {
              id: 78,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '导出角色',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/export',
              i18n: null,
            },
            {
              id: 79,
              parentId: 107,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '下载文件',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:redeem-activity/download',
              i18n: null,
            },
          ],
        },
      ],
    },
    {
      id: 183,
      parentId: null,
      appId: 1,
      appKey: 'cspro',
      path: '/invoice',
      name: '开票管理',
      icon: 'https://assets-test.papegames.com/resources/cdn/b3e9481889281d857abdfca19283a3b81702281710648.svg',
      avatar: '',
      sort: 3,
      type: 0,
      isMoudle: 1,
      status: 1,
      queryParam: '',
      component: '',
      url: '',
      tip: '',
      isBlank: 0,
      desc: '',
      i18n: {
        name: {
          'zh-CN': '开票管理',
          'zh-TW': '',
          'en-US': '',
          'ja-JP': '',
          'ko-KR': '',
        },
        desc: {
          'zh-CN': '',
          'zh-TW': '',
          'en-US': '',
          'ja-JP': '',
          'ko-KR': '',
        },
      },
      perms: [],
      children: [
        {
          id: 184,
          parentId: 183,
          appId: 1,
          appKey: 'cspro',
          path: '/invoice/apply',
          name: '开票申请',
          icon: '',
          avatar: '',
          sort: 0,
          type: 1,
          isMoudle: 0,
          status: 1,
          queryParam: '',
          component: '',
          url: '',
          tip: '',
          isBlank: 0,
          desc: '',
          i18n: {
            name: {
              'zh-CN': '开票申请',
              'zh-TW': '',
              'en-US': '',
              'ja-JP': '',
              'ko-KR': '',
            },
            desc: {
              'zh-CN': '',
              'zh-TW': '',
              'en-US': '',
              'ja-JP': '',
              'ko-KR': '',
            },
          },
          perms: [
            {
              id: 143,
              parentId: 184,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '查看',
              tip: '查看开票申请',
              sort: 99,
              type: 0,
              perm: '/invoice/apply',
              i18n: null,
            },
            {
              id: 146,
              parentId: 184,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '批量开票',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:invoice/create',
              i18n: null,
            },
          ],
        },
        {
          id: 185,
          parentId: 183,
          appId: 1,
          appKey: 'cspro',
          path: '/invoice/history',
          name: '开票记录',
          icon: '',
          avatar: '',
          sort: 0,
          type: 1,
          isMoudle: 0,
          status: 1,
          queryParam: '',
          component: '',
          url: '',
          tip: '',
          isBlank: 0,
          desc: '',
          i18n: {
            name: {
              'zh-CN': '开票记录',
              'zh-TW': '',
              'en-US': '',
              'ja-JP': '',
              'ko-KR': '',
            },
            desc: {
              'zh-CN': '',
              'zh-TW': '',
              'en-US': '',
              'ja-JP': '',
              'ko-KR': '',
            },
          },
          perms: [
            {
              id: 144,
              parentId: 185,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '查看',
              tip: '查看开票记录',
              sort: 99,
              type: 0,
              perm: '/invoice/history',
              i18n: null,
            },
            {
              id: 148,
              parentId: 185,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '重新发送',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:invoice/resend',
              i18n: null,
            },
            {
              id: 149,
              parentId: 185,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '作废',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:invoice/cancel',
              i18n: null,
            },
            {
              id: 150,
              parentId: 185,
              appId: 1,
              appKey: 'cspro',
              status: 1,
              name: '下载',
              tip: '',
              sort: 0,
              type: 1,
              perm: 'cs:invoice/download-pdf',
              i18n: null,
            },
          ],
        },
      ],
    },
  ],
};

const dataAddParent = <T extends any>(
  data: T[],
  ps: any = [],
  returnArr: any[] = [],
): T[] => {
  return data?.map((item: any) => {
    const formatItem = {
      ...item,
      parentIds: ps,
      parentId: ps[ps.length - 1],
    };
    returnArr.push(formatItem);
    return {
      ...formatItem,
      children: dataAddParent(
        formatItem.children,
        [...ps, formatItem.id],
        returnArr,
      ),
    };
  });
};

const flatData = <T extends any[]>(data: T, returnArr: any): T => {
  data.forEach((item: any) => {
    returnArr.push(item);
    if (item?.children) {
      flatData(item?.children, returnArr);
    }
  });
  return returnArr;
};

const deepWithChildren = <T extends any[]>(
  data: T,
  returnData: T = data,
): T => {
  return data?.map((child) => {
    const children = returnData?.filter(
      (allItem) => allItem.parentId === child.id,
    );
    return {
      ...child,
      children: deepWithChildren(children, data),
    };
  }) as T;
};

const formatAppsRemoveEmptyDirectory = <T extends any[]>(data: T): T => {
  let returnArr: any[] = [];
  const returnData = [] as unknown as T;
  dataAddParent(data, [], returnArr);
  returnArr = returnArr?.sort(
    (a, b) => b?.parentIds?.length - a?.parentIds?.length,
  );
  //   第一步先过滤掉空children的目录 或者 children都是空菜单的目录
  let removedData = returnArr?.reduce((result, item) => {
    const children = returnArr?.filter((returnItem) =>
      returnItem?.parentIds?.includes(item.id),
    );
    // 过滤掉空children的目录
    const everyEmptyDir =
      item.type === 0 &&
      children?.every(
        (childItem) => childItem.type === 0 && isEmpty(childItem.children),
      );
    // 先过滤掉空children的数据
    if (everyEmptyDir) {
      return result;
    } else {
      return [...result, item];
    }
  }, []) as T;

  //   第二步 再把他们组装回去
  removedData = removedData?.sort(
    (a, b) => a?.parentIds?.length - b?.parentIds?.length,
  );
  removedData = deepWithChildren(removedData)?.filter((i) => !i.parentId) as T;
  console.log(JSON.stringify(removedData));
  return returnData;
};

formatAppsRemoveEmptyDirectory(data.routes);

// todo 优化
