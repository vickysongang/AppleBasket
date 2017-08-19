/**
 * Created by songang on 2017/8/18.
 */
import React, {Component} from 'react'
import redApplePic from '../assets/red_apple.png'
import greenApplePic from '../assets/green_apple.jpg'
import PropTypes from 'prop-types'

class AppleItem extends Component {

  render() {
    let {id, type, weight, handleApple} = this.props
    return (
      <div style={styles.container}>
        <div style={styles.apple}>
          <img style={styles.img} src={type === 'red' ? redApplePic : greenApplePic}/>
        </div>
        <div style={styles.info}>
          <div style={styles.name}>
            { type === 'red' ? '红苹果' : '青苹果'} - { id }号
          </div>
          <div style={styles.weight}>
            {weight}克
          </div>
        </div>
        <div style={styles.buttonDiv}>
          <button style={
            type === 'red' ? styles.buttonRed :
              styles.buttonGreen
          } onClick={()=> {
            handleApple(id, type)
          }}>
            { type === 'red' ? '吃掉' : '催熟'}
          </button>
        </div>
      </div>
    )
  }
}

AppleItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  weight: PropTypes.number
}

const styles = {
  container: {
    margin: '10px auto',
    borderRadius: '4px',
    border: '1px solid #ddd',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  apple: {
    display: 'flex',
    flexGrow: 1
  },
  img: {
    width: '50px',
    height: '50px',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexGrow: 15
  },
  name: {
    padding: '6px 0',
    fontSize: '20px',
    color: '#069',
    fontWeight: 500,
  },
  weight: {
    fontSize: '16px',
    fontWeight: 200
  },
  buttonDiv: {
    flexGrow: 2
  },
  buttonRed: {
    border: 'none',
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '10 24px',
    borderRadius: '6px',
    margin: '18px auto',
    outline: 'none'
  },
  buttonGreen: {
    border: 'none',
    backgroundColor: 'red',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '10 24px',
    borderRadius: '6px',
    margin: '18px auto',
    outline: 'none'
  }
}

export default AppleItem
