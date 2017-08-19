/**
 * Created by songang on 2017/8/18.
 */
import React, {Component} from 'react'
import AppleItem from './AppleItem'

class AppleBasket extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.initApples()
  }

  pickAppleAction = () => {
    if (this.props.applesOnTree.length === 0) {
      alert('树上已经没有苹果了')
      return
    }
    this.props.pickApple()
  }

  getStatsCount = (apples) => {
    let result = {
      currRedCount: 0,
      currRedWeight: 0,
      currGreenCount: 0,
      currGreenWeight: 0
    }
    apples.forEach((apple)=> {
      if (apple.type === 'red') {
        result.currRedCount++
        result.currRedWeight += apple.weight
      } else {
        result.currGreenCount++
        result.currGreenWeight += apple.weight
      }
    })
    return result
  }

  getWeight = (apples) => {
    let weight = 0
    apples.forEach((apple)=> {
      weight += apple.weight
    })
    return weight
  }

  handleApple = (id, type) => {
    if (type === 'red') {
      this.props.eatApple({id: id})
    } else {
      this.props.repeningApple({id: id})
    }
  }

  renderAppleList = (apples) => {
    if (apples.length === 0) {
      return <div>
        苹果篮子空空如也
      </div>
    }
    return apples.map((apple)=> {
      return <AppleItem
        id={apple.id}
        weight={apple.weight}
        type={apple.type}
        key={apple.id}
        handleApple={this.handleApple}
      />
    })
  }

  render() {
    let {apples} = this.props
    let datas = this.getStatsCount(apples)
    return (
      <div style={styles.container}>
        <div style={styles.title}>
          苹果篮子
        </div>
        <div style={styles.stats}>
          <div style={{
            ...styles.section,
            borderRight: '1px solid #f0f0f0'
          }}>
            <div style={styles.head}>当前</div>
            <div style={styles.content}>
              {datas.currRedCount}个红苹果(共{datas.currRedWeight}克)，
              {datas.currGreenCount}个青苹果(共{datas.currGreenWeight}克)
            </div>
          </div>
          <div style={{
            ...styles.section,
            borderRight: '1px solid #f0f0f0'
          }}>
            <div style={styles.head}>吃掉</div>
            <div style={styles.content}>
              {this.props.eatenApples.length}个红苹果
              (共{this.getWeight(this.props.eatenApples)}克)
            </div>
          </div>
          <div style={styles.section}>
            <div style={styles.head}>催熟</div>
            <div style={styles.content}>
              {this.props.ripeningApples.length}个青苹果
              (共{this.getWeight(this.props.ripeningApples)}克)
            </div>
          </div>
        </div>
        <div style={styles.list}>
          {
            this.renderAppleList(apples)
          }
        </div>
        <div style={styles.buttonDiv}>
          <button
            onClick={this.pickAppleAction} style={styles.button}>
            摘苹果
          </button>
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    width: '600px',
    margin: '0px auto',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  title: {
    padding: '6px 0px',
    textAlign: 'center',
    color: '#069',
    fontSize: '20px',
    borderBottom: '1px dashed #ddd'
  },
  stats: {
    display: 'flex',
    flexDirection: 'row',
    borderTop: '1px dashed #ddd',
    borderBottom: '1px dashed #ddd',
  },
  section: {
    display: 'inline-block',
    paddingLeft: '8px',
    flex: 1
  },
  head: {
    padding: '6px 0px',
    fontSize: '16px',
    color: '#069'
  },
  content: {
    padding: '5px 20px',
    fontSize: '20px',
  },
  list: {
    padding: '10px 0'
  },
  buttonDiv: {
    textAlign: 'center',
  },
  button: {
    border: 'none',
    backgroundColor: '#096',
    color: '#fff',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '13px 50px',
    borderRadius: '6px',
    margin: '20px auto',
    outline: 'none'
  }
}

export default AppleBasket
