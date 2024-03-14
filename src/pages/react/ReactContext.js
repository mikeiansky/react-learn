import {createContext, useContext} from "react";

const LevelContext = createContext(1)

function Heading({tag, children}){
    const level = useContext(LevelContext)

    console.log(tag, 'level is', level)

    switch (level){
        case 1:
            return <h1>{children}</h1>
        case 2:
            return <h2>{children}</h2>
        case 3:
            return <h3>{children}</h3>
        case 4:
            return <h4>{children}</h4>
        case 5:
            return <h5>{children}</h5>
        case 6:
            return <h6>{children}</h6>
        default:
            throw Error('unknow error by developer')
    }
}

function Section({level, children}) {
    return (
        <section>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
        </section>
    )

}

export default function App() {

    return (
        <>
            <h1>
                This is context App1
            </h1>
            <h2> This is context App2</h2>
            <Section level={1}>
                <Heading>主标题</Heading>
                <h1>主标题</h1>
                <Section level={2}>
                    <Heading tag={'under2:::'}>副标题22</Heading>
                    <h2>副标题333</h2>
                    <Section level={3}>
                        <Heading>子标题1</Heading>
                        <Heading>子标题2</Heading>
                        <Heading>子标题3</Heading>
                    </Section>
                </Section>
            </Section>
        </>
    )
}