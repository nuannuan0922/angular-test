'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            list: [{ id: 1, name: '第一项' }, { id: 2, name: '第二项' }, { id: 3, name: '第三项' }, { id: 4, name: '第四项' }]
        };
        return _this;
    }

    _createClass(List, [{
        key: 'goToDetail',
        value: function goToDetail(id) {}
    }, {
        key: 'render',
        value: function render() {
            var list = this.state.list;

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ul',
                    null,
                    '(list && list.length) ? (list.map(item => (',
                    React.createElement(
                        'li',
                        { onClick: this.goToDetail.call(this, item.id) },
                        'item.name'
                    ),
                    ')))) : null;'
                )
            );
        }
    }]);

    return List;
}(React.Component);

exports.default = List;
