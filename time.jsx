class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        }
    }
    render() {
        const { title } = this.props;
        const start = (e) => {
            this.startTimer();
        }
        // const stop = (e) => {
        //     this.stopTimer();
        // }
        return (


            <div className='stopwatch'>
                <h2>STOPWATH</h2>
                <p className='stopwatch-time'>{this.state.seconds()}</p>
                <button onClick={start}>START</button>
                <button>RESET</button>
            </div>
          
               

                
                /* <button onClick={stop}> stop </button> */
		);
    }
    // componentDidMount
    startTimer() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }
    //componentWillUnmount
    // stopTimer() {
    //     clearInterval(this.timer);
    // }
}