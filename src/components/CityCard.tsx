function CityCard({
                      gradientBg,
                      city,
                      png,
                      temperatureRange,
                      onClick,
                  }: {
    gradientBg: string,
    city: string,
    png: string,
    temperatureRange: string,
    onClick: () => void
}) {
    return (
        <div
            style={{
                position: 'relative',
                flex: 1,
                borderRadius: '1.5rem',
                background: gradientBg,
                cursor: 'pointer',
            }}
            onClick={onClick}
            // onClick={() => {
            //     setSearchValue(city.city)
            // }}
        >
            <img
                src={city + '.png'}
                alt={city}
                style={{
                    width: '100%',
                    objectFit: 'contain',
                    opacity: 0.2,
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // rowGap: "0.25rem"
                }}
            >
                <img
                    src={png}
                    alt={`${city} weather`}
                    style={{
                        width: '4em',
                    }}
                />
                <div
                    style={{
                        fontSize: '1em',
                        fontWeight: 700,
                        color: 'white',
                    }}
                >
                    {city}
                </div>
                <div
                    style={{
                        fontSize: '0.75em',
                        color: 'white',
                    }}
                >{temperatureRange}
                </div>
            </div>
        </div>
    )
}

export default CityCard