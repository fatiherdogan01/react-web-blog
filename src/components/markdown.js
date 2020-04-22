import React from 'react';

import { makeStyles } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import CodeBlock from "../components/code-block";

export default function Markdown(param) {

    const classes = useStyles();


    function Image(props) { return <img className={classes.image} {...props} alt={param.seoUrl} /> }
    function BlockQuote(props) { return <blockquote className={classes.blockquote} {...props} /> }
    function ThematicBreak(props) { return <div className={classes.thematicbreak} {...props} /> }
    function InlineCode(props) { return <code className={classes.inlinecode} {...props} /> }
    function Paragraph(props) { return <p className={classes.paragraph} {...props} /> }

    return (
        <>
            <h5 className={classes.date}>{param.date}</h5>
            <ReactMarkdown source={param.source} renderers={{ code: CodeBlock, image: Image, blockquote: BlockQuote, inlineCode: InlineCode, thematicBreak: ThematicBreak, paragraph: Paragraph }} />
        </>
    );
};

const useStyles = makeStyles({
    date: {
        color: 'grey',
        fontWeight: '500'
    },
    image: {
        width: '100%',
    },
    thematicbreak: {
        backgroundColor: '#ccc',
        height: 1,
        marginTop:40,
        marginBottom:40
    },
    paragraph: {
        display: 'inline-block',
        opacity: 0.8,
        fontSize: 20,
        fontFamily: 'medium-content-serif-font,Cambria, "Times New Roman", Times, serif;',
        lineHeight: 1.58,
    },
    blockquote: {
        margin: 0,
        width: 'fit-content',
        fontSize: 38,
        position: 'relative',
        justifyContent: 'center',
        display: 'flex',
        color: 'grey',
        fontStyle: 'italic',
        '&:before': {
            position: 'absolute',
            left: 0,
            top:-2,
            fontFamily: 'Sanchez',
            fontWeight: '800',
            color: 'black',
            content: 'open-quote',
        },
        '&:after': {
            position: 'absolute',
            bottom: -17,
            right: 0,
            fontFamily: 'Sanchez',
            fontWeight: '800',
            color: 'black',
            content: 'close-quote',
        }
    },
    inlinecode: {
        display: 'inline-block',
        fontSize: 18,
        paddingLeft: 5,
        paddingRight: 5,
        background: '#F3F4F4',
        borderRadius: 3,
    },
});