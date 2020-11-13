import React from 'react';
import ImageUploader from 'react-images-upload';

class Prdimg extends React.Component {

    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        console.log("picture =>", picture)
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        this.state.pictures.map((val, ind) => {
            console.log(val)
        })
        return (
            <div className='textf-comp'>
                <label htmlFor="">Choose Picture:</label>
                <input
                    className='textf-comp'
                    style={{ marginLeft: '10px' }}
                    value={this.props.onAdd}
                    withIcon={false}
                    disabled={this.props.disable}
                    type='file'
                    buttonText='Choose images'
                    onChange={this.props.onChange}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
                {this.state.pictures.map((val, ind) => {
                    return (
                        <p className='textf-comp' >
                            {val.name}
                        </p>
                    )
                })}
            </div>
        );
    }
}


export default Prdimg;