import React from 'react'
import Head from 'next/head'

export default class BasicLayout extends React.Component {
    componentDidMount() {
        console.log('==BasicLayout===')
    }
    render() {
        const { children, title = 'This is the default title' } = this.props
        return (
            <div>
                <Head>
                    <title>{title}</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                </Head>
                {children}
            </div>
        )
    }
}