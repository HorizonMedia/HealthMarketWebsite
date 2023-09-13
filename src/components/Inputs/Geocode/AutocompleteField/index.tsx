import React from "react";
import {navigate} from "gatsby";
import * as qs from 'qs'
import GeocodeAutocomplete from "../GeocodeAutocomplete";
import {useLocation} from "@reach/router";
import { Styles } from "./styles";
import { Global } from "@emotion/react";
import SearchIcon from "../../../../static/images/search-green.png"
import {
  populateZipCode,
  maybeSetCounty
} from "../../../../static/scripts/global"

const AutocompleteField = ({ showFilters = false,  className, placeholder, defaultValue = "", onSetCoordinates, hideOnMobile, hideOnDesktop, ...props }: React.HTMLProps<HTMLDivElement> & { placeholder: string, showFilters?: boolean, onSetCoordinates?: any, hideOnMobile?: boolean, hideOnDesktop?: boolean }) => {
    const [address, setAddress] = React.useState<string>(defaultValue as string);
    const [producedSearchState, setProducedSearchState] = React.useState({})

    React.useEffect(() => {
        setAddress(defaultValue as string)
    }, [defaultValue])

    const location = useLocation()

    React.useEffect(() => {
        const q = qs.parse(location.search.slice(1))
        if (q) {
            setProducedSearchState(q)
        }
    }, [location])

    return (
      <>
        <Global styles={Styles} />
        <GeocodeAutocomplete
          searchOptions={{
            api_key: "ge-470664a6d59b9a9f",
            layers: "coarse",
            "boundary.country": "US"
          }}
          value={address}
          onChange={(newAddress) => {
            setAddress(newAddress);
          }}
          onSelect={(_newAddress, _, suggestion) => {
            if (suggestion?.coordinates) {
              if (showFilters) {
                // will jump to the top of the agents grid
                //@ts-ignore
                window.gatsby_router_hash = "#agents-top"
              }
              setProducedSearchState(prev => ({ ...prev, configure: { aroundLatLng: `${suggestion.coordinates[1]}, ${suggestion.coordinates[0]}`} }))
            }
          }}
        >
          {({getInputProps, suggestions, getSuggestionItemProps, loading, onClick}) => {
              return (
                  <>
                      <div className="geocode autocomplete" {...props}>
                          <div className="input group">
                            <img src={SearchIcon} alt="map location pin image" />
                            <input
                              {...getInputProps({
                                value: address,
                                placeholder: "Enter Zip Code",
                                type: "text",
                                className: 'geocode input',
                              })}
                              onInput={(e) => (e.currentTarget.value = e.currentTarget.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1").substring(0,5))}
                            />
                          </div>
                          
                          <div className="suggestions">
                            {suggestions.map(suggestion => {
                              const className = suggestion.active
                                ? 'suggestion active'
                                : 'suggestion';
                                
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    onClick: () => {
                                      setAddress(suggestion.description);
                                      populateZipCode(suggestion);
                                      maybeSetCounty(suggestion);
                                    }
                                  })}
                                >
                                  <span className="description">{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                      </div>
                  </>)
          }}
        </GeocodeAutocomplete>
      </>
    )
}

export default AutocompleteField;
