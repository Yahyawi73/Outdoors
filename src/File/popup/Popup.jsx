import React from 'react';
import image8 from '../img/nat-8.jpg';
import image9 from '../img/nat-9.jpg';

const Popup = () => (
    <div className="popup" id="popup">
        <div className="popup__content">
            <div className="popup__left">
                <img src={image8} alt="tourphoto" className="popup__img" />
                <img src={image9} alt="tourphoto" className="popup__img" />
            </div>
            <div className="popup__right">
                <a href="#sections-tours" className="popup__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; please read these terms before booking</h3>
                <p className="popup__text">
                    Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lor
                    em Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensem
                    ble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, ma
                    is s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années
                    b1960 grâce à la vente de feuilles Letraset c
                    ontenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
                </p>
                <a href="/" className="btn btn--green">Book now</a>
            </div>
        </div>
    </div>
)

export default Popup;