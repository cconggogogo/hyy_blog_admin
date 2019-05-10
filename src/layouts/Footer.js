import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '博客网页端源码',
          title: '博客网页端源码',
          href: 'https://github.com/HYYEVOLCLJ/hyy_blog_webPage',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/HYYEVOLCLJ',
          blankTarget: true,
        },
        {
          key: '博客后台源码',
          title: '博客后台源码',
          href: 'https://github.com/HYYEVOLCLJ/hyy_blog_admin',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> HuYangYang
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
