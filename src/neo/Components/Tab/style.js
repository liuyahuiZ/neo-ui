export default {
  container: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    fontSize: '1rem'
  },
  containerHead: {
    display: 'inline-block',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    display: 'flex',
    backgroundColor: '#fff'
  },
  floatLeft: {
    float: 'left',
    top: '0px'
  },
  leftHeadWidth: {
    width: '30%',
    borderRight: '1px solid #ddd',
    borderBottom: '0',
    maxHeight: '50vh',
    overflow: 'auto',
  },
  leftContentWidth: {
    width: '70%',
    maxHeight: '50vh',
    overflow: 'auto',
    padding: '0 0.3rem'
  },
  show: {
    display: 'inline-block',
    width: '100%',
  },
  hide: {
    display: 'none',
  },
  tabItem: {
    display: 'inline-block',
    boxSizing: 'border-box',
    cursor: 'pointer',
    borderBottom: '1px solid #E0E0E0',
    flex: 1,
    textAlign: 'center',
    color: '#999'
  },
  tabSpan: {
    width: '100%',
    boxSizing: 'border-box',
    height: '2rem',
    lineHeight: '2rem',
    display: 'inline-block',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    borderRight: '1px solid #E0E0E0',
  },
  tabActive: {
    borderBottom: '2px solid rgb(65, 150, 252)',
    color: 'rgb(65, 150, 252)'
  },
  leftTabActive: {
    color: 'rgb(65, 150, 252)',
    backgroundColor: '#f5f5f5'
  },
  tabContent: {
    display: 'inline-block',
    width: '100%',
    minHeight: '50vh',
    boxSizing: 'border-box',
    backgroundColor: '#f5f5f5'
  },
  borderNone: {
    border: 0,
    borderRight: 0,
  }
};
