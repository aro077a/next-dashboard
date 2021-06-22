import { VscHome } from 'react-icons/vsc';
import { VscWindow } from 'react-icons/vsc';
import { MdApps } from 'react-icons/md';
import { BiLock } from 'react-icons/bi';
import { AiOutlineEye } from 'react-icons/ai';
import { BsLayoutWtf, BsBook, BsLayers } from 'react-icons/bs';

export const collapseData = [
  {
    id: 1,
    title: '',
    collapseTitle: 'Dashboard',
    tag: '',
    collapseIcon: (
      <span>
        <VscHome />
      </span>
    ),
    isCollapseAble: true,
  },
  {
    id: 2,
    title: 'Pages',
    collapseTitle: 'Pages',
    tag: '',
    collapseIcon: (
      <span>
        <VscWindow />
      </span>
    ),
    isCollapseAble: true,
    collapseChilds: [
      {
        id: 1,
        title: 'Users',
        count: '',
        isChildCollapseAble: true,
      },
      {
        id: 2,
        title: 'User Profile',
        count: '5',
        isChildCollapseAble: true,
      },
      {
        id: 3,
        title: 'Account',
        count: '',
        isChildCollapseAble: true,
      },
      {
        id: 4,
        title: 'E-commerce',
        count: '',
        isChildCollapseAble: true,
      },
      {
        id: 5,
        title: 'Projects',
        count: '',
        isChildCollapseAble: true,
      },
      {
        id: 6,
        title: 'Project',
        count: '',
        isChildCollapseAble: true,
      },
      {
        id: 7,
        title: 'Referrals',
        count: '',
        isChildCollapseAble: true,
      },
    ],
  },
  {
    id: 3,
    collapseTitle: 'Apps',
    tag: 'Hot',
    collapseIcon: (
      <span>
        <MdApps />
      </span>
    ),
    isCollapseAble: true,
  },
  {
    id: 4,
    collapseTitle: 'Authentication',
    tag: '',
    collapseIcon: (
      <span>
        <BiLock />
      </span>
    ),
    isCollapseAble: true,
  },
  {
    id: 5,
    collapseTitle: 'Welcome page',
    tag: '',
    collapseIcon: (
      <span>
        <AiOutlineEye />
      </span>
    ),
    isCollapseAble: true,
  },
  {
    id: 6,
    title: 'Layouts',
    collapseTitle: 'Layouts',
    tag: '',
    collapseIcon: (
      <span>
        <BsLayoutWtf />
      </span>
    ),
    isCollapseAble: false,
  },
  {
    id: 7,
    title: 'Documentation',
    collapseTitle: 'Documentation',
    tag: '1.1',
    collapseIcon: (
      <span>
        <BsBook />
      </span>
    ),
    isCollapseAble: false,
  },
  {
    id: 8,
    collapseTitle: 'Components',
    tag: '',
    collapseIcon: (
      <span>
        <BsLayers />
      </span>
    ),
    isCollapseAble: false,
  },
];
