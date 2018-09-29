class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {id: 1, name: '第一项'},
                {id: 2, name: '第二项'},
                {id: 3, name: '第三项'},
                {id: 4, name: '第四项'}
            ]
        }
    }

    goToDetail(id) {

    }

    render() {
        let { list } = this.state;
        return (
            <div>
                <ul>
                    (list && list.length) 
                        ? (list.map(item => (<li onClick={this.goToDetail.call(this, item.id)}>item.name</li>))))
                        : null;
                </ul>
            </div>
        );
    }
}

export default List;