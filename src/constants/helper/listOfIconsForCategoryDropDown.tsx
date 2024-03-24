const listOfIcon = [
    <img className="mr-2" width="24" height="24" alt="Cleaning" src="https://img.icons8.com/officel/80/housekeeping.png" />,
    <img className="mr-2" width="24" height="24" alt="Electricity" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO2Yv2sUQRSAH2gjCHZq7x9gYSfYaCVYBdL4o8q8t5LmsBMsgqVFylRiEbAKiJ2FFlfdzhtJIUIKk+7I7fw4sLE4TAgbRkk81pMbuYN9A/vB6/f72GXnDUBHR8dSYBWswVAz+alxU2PP5htIY/DUXo0PnyKgyU5AGqzCnf8Q2AFpsApryQLoeiANo8KrVAFW1S2QhlHhfZIAVj/6G/VFkIZRfi9R4CNIY2e1vmAwTNJeoWoDpLFL/sbZw88VUPYuSOMzhvtJAlgd99f9ZZCGxtBLFDAgEVZhK03AboJEWIVPKQKaqhWQCGMYpgiYdX8dpFE+G15iFU7mCWiJJ9AIF/6mwXE9X8C9AYkYCqspAo19oNZFNTWjOF/bEcDwYhkCZXE4bktgeykCNHrYjoAKvKhASaP9eJ5qRYBx/HNhgWL0CNrCqPH+IgIlVe3VT4XJvv6nQNFi/VQ02i+zBGL9vsTtrPmn1mSPZgrkUH+A/vasbyCL+pF4hTJTIIf6ESb79i8BzKR+JJ5CmwKlyqT+Ln2/otGeNK5V8qlvyN1r/sg0VY8hFzT5542lPp/6EUb3rrET51M/otEPp24k8qqv19y1xkqZV32j7IM/AvYgq/oRTf7luQD6J5AbTO7Db4EM60eY3OSXQI71I5rcQJPbE79tdXRA/pwCisaluR73LvgAAAAASUVORK5CYII=" />,
    <img className="mr-2" width="24" height="24" alt="Heat/Gas" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4UlEQVR4nO1YWWxMURj+KqWmaq2qrQwvZM65tQxRS2yh4oG0qCUeLI+eeLMkhIgHggiC8MCLRyKxBInlgXrwKCTmnDZqqSKolC6iv/yztffOvTO33JlOk/mSL5ncnHvP953z///55wA55JBDDt1BQD8t0aAljr6cimL0RSiBn1qClMBXJbDz4SLko6/g9XSUsHgTBZ7qACagL0AFsCnBQMTE9zoDNch2KIF7tgY4pCQ6tcQeZCtCAvOcxJuMCBwnIA/ZhPqJGKgkXroxEOXlrEpuJXCiB+JjIXUJ2QBtYJmS+NNTAzrC3b0qvn4a/Fri8z+Kp2hib+4V8a+mYLCWePGv4nWXiVZlIJjxlkFJ3Phf8bqrMr16H0Rhxgxwr5NKVH15P/q+rJi04drE8YyIVwFscSPo3ewCog2T6ceKEncmBH5rA0ZaxdcHMF1LtLkx0Lx8ZNhA2ERlibtwEriVNvGN5Rjk9rB6MyOfOtdPihtgfl063JWJkIGZaTGgJC66EVBn5FHrqrEm8TE2LShyY+KK5+JDAkvcVpTmyq7QsZJ35W1wQKpkbuHd9tSAFnjuRvy3pSMcxcfYXjWe6srzUuXCWs/EhwQWuxHPMZ5KfDwflqTMh5OeGdAC51OJ/7J4qGvxsVB6MyM/2TefeGaAT8lk4j8vHNIj8TE2V45MZqDBSwMtThN9mONLKJdxbvMTnSkm2mhv4E+NP1yxHBL5l2cGtES7U7nsqC5zXuUjo4geF0RMOIxpmu9YVtu8MyDwyTZ0FiUJnR1lRPd9EQPMY/altWVlqdMOfPTMgJJ4ZjdJ2+px9uK3TyS6XdglnvmogGhX4vjfayakP4m1wDm7STprbGJ/i5/oepFZfIz8fJP5nc6aSfY7IHHGSwNr7SbhJDSJZ3FXB9uLj3HfGHMir/PbGghJVHlmoKECPr6Ysk6SkMCHo0mbjFfM50VHdZld/H/jWw54CS1w0DoR9/kmA06h0503C03v/LBps5XEfniNFwEUcWXoPlFjhVkMPRiY2gCP6fbOhwqftQf6xP+1kQ5oie3W1TK1zW524FpRfHzbqnGJq29ga1rEO1Ukbo3jyXy4NLWBQ6Xx5H1raauVwGmkG8+D6K8k7praiQpfxAS3DBeHOYu/MDw8hsUnhI7EHf42MgG+09QCp0w7MWsAta6OhtO+0URXhxDd8xHd9UV+742UTw65hmB/a9xfyJj4hJywtBmNcwvDlaWjqix8SDH5Nz+zrroS+Mg3HOhNhG/nuMTanBNO5DqvJA5wZUOWXa9XK4mzSqBWCzRFu9j28EoL1HJ7wCes54dUDjnkgD6Lvx298WvZ7Gr5AAAAAElFTkSuQmCC" />,
    <img className="mr-2" width="24" height="24" alt="TV/Phone/Internet" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADqUlEQVR4nO1YW48UVRBuQcXbCyJyCW5XDRuM+6IGBZ80XoD4wEV/gMFokOsPMKibYCJLCBjcrhpGYjYxJJBFn0R5gAAPmkCECImYgDyQdbksEJiu6uUBZdtUz2LY2Z5bT8/iJP0lJ+l0V9f5qk+d71S142TIkCFDhgwZ2hidO2S6S7ICST9Hkj1A8iuw/IWsN5Dkn2iw3gCWAXtmNki6CTxZPq8gT90X0q4XvICsPcj6B5KMIGuYaJCMIOkZYP0C8sHzLSU9qxA+hiRrI9JJCdcMSM+4JKvnbAsfTZU4kHyGrNdbRpzHDiC9Biyf2NxNkUfylyLLhYkijuNTbBAoeM8JwwcaI75LZyDJT43kMbIWbPmR9S3s9efN2VV80r6gDbu2e5jXRTmWNcj6dSP7B1j351ifrou8y8HbQDJUxzL/jHld73rBzIQL7HQUgllAugFYf6k9n1wBDpZUdWjORmWvkpPbSPKtqZCTMlwOXgSS3cDyd5XVNm7rYh0g65YaX+BHYP/ZtImXwyV5DlkO1FiRLeNehLx8FJeTwHrVDiqnCrq8oSdseaMDivV7YDmNJJeQ9WY0SC7ZPXsW2VCweMbWy49X85kjedfUKG7PGdfYl8qDAJZDlqexxt3hJGB/GZB+hyy3GlcZuQWs+0zpzFfcFM/0Ds9GlsN1kb8LJPkAWe4ga9/8QvhQHPEc+e8D6bm05BJYz7qevzIukNe6wweRdGdJ7WRtVfL/BZEvLogPbvhlZDnZKt0HlhO5ncMvxc0Nnr/QSYzucBKSbIxUqEXkcazSfVwprRqG1SVRrtae3KrPPSZzLunrc71i5+xef5oNu86xvmHnBrLsHd3ctdJqXyo1UalUrnJikhwxm67+8OF6fZqtm5d3kPVoFb8jZuOkgTiJBZbfc56+2axvzOsi8zWOPMlqJ03cGwSwbO/cEU5Jy7fbFz6CJF+2jPy9QURyVwEdXMyZ1EWHGenxqAtjGUDWY3ZeWCHX8dVNrBiI569sGflqcNl/BUh/qL+6lIPNyWKaXRprX3LJ1G9S7b4aJk9yqnntl9+a7rySAlk+HC07kpGnKOXiy+OJQtSFjSkA9U9g+RQ8edU2tQ27tr4aSM+3VCqTwogAqwLLKqc/nFzRsD+cbEpmtqZIzv8JHVyc2grbDElgtU7UokZdmVy0v3iN1Er3HaO/HctVp8dpF2CpHy7X+8tOuwBLaVOu+YNOO6cQkG522mwT95RWog03cYYMGZwJw7/ekONKEARPQgAAAABJRU5ErkJggg==" />,
    <img className="mr-2" width="24" height="24" alt="Ice-Cream" src="data:image/png;base64,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"></img>,
    <img className="mr-2" width="24" height="24" alt="Coffee" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO3YOXMaZxgH8E2TGTeZVBbotoxgEfdpgbgPCRCXJLCxrQg5XyBFJplM+kxSJE3SZCZV8gmSxk3GSZGjMyAksAxCF4eEbCNbOEUydp7MrgUIWK288EJc7H/mqRjY3395dxdeDGPDhg0bNr3O83D0j+fhVWAy1VAUqksrcLL4HpwsLMOzIDG34WngFjz134RjXwSOvRGozN+AJ57r8MQThsfuEDx2heDR3BI8ml38DWGBLtCBZnTlLNrdhoYj5wIcOYJQtgehLwXo0McdoMv2ABza/HBo9fWoQIgG7adBu2jQtgb6wOKFktkLJdM8wgIEuA1NnOVW9A0K9BIFOkCBnifRRaMHigY3FAwudAVQow9o0IWZOcjr5yCvm0VXoI720aDnqNGHBNpKg55pRu9PO2H/mgP2tHZ0BfqJ3tPYYVdjgx21FV2BdvRiHV2uo/0UaA8FepYCbaujd1QW2FaaYVthgjRPBVmJnnyN+Jyyc6FY8Ue+gHD4bUYFSPQsDdpCg9ZTownUrrodnZObICczwpbU0FaAODZx7VXDq58zKnDkDFa7Qe8xQG9JZ0h0Vqw7aXWUHUEDWSAULTIqcGDzZ+toMw1a1y1aDxmRDjJT0/AQ12aoLEQB4nnEqEDJPH+vgXa3ofd1Tgo0AW5FGxtoSf1MQx0tvAabuBY2BRpIC9T3kBUoGl1f1dB5hOiHLegHxPDVkJ5UQYqn+BJZgbzetVy/CM9DK2nQxNI4D81voNM8JaSuKiA1oYCNK7LbyAoUNHZ+f9By2BiXwfq4FBJXpHxkBYjsqKx5Ymm0o4mL0ADZJvQ0BVpNgZY3odfHJJAcFcPasPjcu0zHBXJy0w819FYrWkSDnqRBj0khWUOPEHARJIamIM4Vfk9lOLT5Bk4LlBkX2JIZV7tFr9OgE4NCiHNxcmIcPEplKDuCn5w+yO4yLpAVGUfqt7seoONn5j5HOHb22Dsy87tFg/vTsiP4gihwcn3FhHWSTVybbUYT4AZ6g0TLGujRGlp0ITpeG46AfIAlRyUTKZ7yg6xE//Ouxvr36W+hf499kQ+xTpPmq7+toVMo0dzGxDj4gxgHLxDvPfNb6J+C0XP3yBE0Y91k46rCfy56pHN0nGLWhqYKKZ7qu4xUv5TRut7BUOTP4elL6+PSv3qFjnPxl3EO/tl9Lq4CDHsL60WSw+KfXqGnUKGhsf7xH7FeJzEofB8pmntmBgV3el9gYOJynIu/QI2PcfGXycviAawfiXHw35EX4ODothIvSpwr/Bj58hkQfNS3ArEh4STqAmuDAgESXDUUTTDdie7XVEPRxIUFKv6bK+Ru8hs4z4KR5df6FkoW7zevdh3enClZvF8zWkrbcksgpzD9mlOaK+QfmP9hckpzJacw/5JTmHyM8GzYsGHDBnvN/Acg12nCF57TUAAAAABJRU5ErkJggg=="></img>,
    <img className="mr-2" width="24" height="24" alt="Tea" src="data:image/png;base64,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"></img>,
    <img className="mr-2" width="24" height="24" alt="Pizza" src="data:image/png;base64,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"></img>,
    <img className="mr-2" width="24" height="24" alt="Pastry" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENElEQVR4nO2W+1OUVRjH9z+IXeQmIDcXFOIiIRIKmiH3dUkcmUqqSRKUSG5plIjcFLkkmyUVManTNKGVQOQOSS1xRwS5JLcwkJVSLsvegN2nH77NLuY0DewMjBtg72fm+9N7zpnn855z3vdhsRgYGBgYGBieMCQB8XxpQGKNNDBB+TAiSWA8j7UaGPOJzhn3icH8ic5mrWRG3SL5o+6vQlfuuUeGslYqw44RNXcdI6AzGyN+Wu46WaoiIV9dKKxR51Yq1VnlSvWJMpHq3a95gzZ8xaBtGHTGJkyuSi3nq7PK5+YLrinV56tEquLq/+aOqIuqckggBOV9D8quAKWVgVK+ASVdwZj/cXWfeTBGtsdCllQMVW65NrLEYoz4xkLzbCwkTaUdr5mXXTG3jma9oiqoS65n6/3NL1Q8xX0Fiv4Skv0FoFMV82Zyf/7cOM34BST+LLmuvzuiOTa6iqe3SkGpV3UnrlSnhLqoSn93RJ1bqViweE3iL4OSr+hOfOnc2AUk1AKh/LEUe5HPDb7A44ovhHLxech6lATb4bMgOxQH2uLTABt8sssaH/tZo+h5K5zfuQ4fPWeJD3dY4tx2Cwh8zVHoY46z29bi/a1mKPA2Rf6zpsjzMkHuFk2MccbTGDmbjXDaQ5M1OPXMGmS7G2qTtYmDDDe2PN2FfTXD2dBhaQI8e/FFHhfLJZDpxkGGKwfprmxJphPbctECl3bbYyUIZLiyke5icHl1CzgbyBYtQCoxaHYENDsMmh0Czd4BzQyCZgZAM/2gmV7QdA9o+hfQdDdouhOk7AAp20HKNpCiFaRoASmaQYpGkLwBJK8DyWtB8hqQTASS/QiSVYNkP4CkVSCpECS9BpqqBE19B5oqB02VgSTfghGg1bYDCt5RyEOSIQtKhDQgAVN+RzC5Mw4TO2Ix7nsIY9ti8MD7IO57ReEPz9fxu8drGHV/BffcIiF2eRkjzi/hrtOLGHaMwNCGfRhy2IvfuOG4Y7dH2xP9as3HgNVu9FuGos8iRNtm9K4NQq9ZIHpMA9Bj4o8eY3/cNtqF22v8GAEwO+DAHKHFwVxi5//BV0jx8xeQiy7pR2C+VuLfAkv9kf0tQA9/ZP8U0GsrIdmX8khg/IXkJQuIww9DvOfwI4F+G55WoM86VL8CM3XVmNx7DBPhRzFdK3xsrcSDjJMY4IbhfvoJppl7ctrp7nPe6BZ4obtwC7rOeqKrYDM68z3QmeeOjjOb0JHjhlunXXEr2wXtWU+jPdMJbemOaDu5ETfTNuBmqj1aj3PR+t563Eixw413bNFyzBotb1uhOXkdmpMs0ZRggaZ4czQdMUNjnCka3zRBQ6wxGg4ZoT7GEPXRHNS9wUbdgaekq1qg9oBB6VIExCtBoDaKPSGK4lgsWqDzg61BXQKvkeUSqIs2lNUf5JQuqXgGBgbWquEvyA/qfqbSoRcAAAAASUVORK5CYII="></img>,
    <img className="mr-2" width="24" height="24" alt="Shawarma" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE2klEQVR4nO2Ye2xTdRTHzw8ImqiJQ8WEwEwkOskwJu1YgIA8dGRG5DUmBDVbgInRP+Yg/qFB1zIY+MpQtrFu7Z48y5wDhpXsAWuvY5thkGhEE40hrLa9faztWLsN9WvuZa+WbR3r7l1NdpJPsqRtdj73nHN/516iqZiKyAsllzVfaVKfUnIqXkT8O2s+/Y+Styk5NYaiMKmscabMpynSQ2lSHwtOfkCCU5dTJEZcY9Y8hUlVqTCpvCMlP6QSwne+jeP2xVDkJK929id4vW0ebl6bhY9aNo8qouRULuG3k50/CVd+aGLXWubh71YS0VxZEUJCrY8EgYC2WcSpkMltQBc3Hb0cYQ+3deCzvc1JYnWuXY3uaye1J2J7Psu4Ft2XCH9cnoVFXCaKml8cqMzV5ujJm4m4oJ5f0piJA5+/h6Y3tsC88lW0L0+EadN67Nu/AzcMT8B3kaA1LhOrIVTlY26jWKVJmwnFkJ5PNOxF25vb4F69Dh0rX4MjYRPsqzfAvugl8C8sx401y+CpmAlnwwNiNdTGdZM/E4q+thGufFvKW/AkbIQrKQX2tN2w79pzl50Z4BOTYY1dCn7VQnRdYNCej0X0ie2YXfg6Hj+6GXOKt+G5moygW6wMM9EvkJ2TDm/iZriSUwcTD8K2JgmWmHic2a2E8sw7qP71NFzuVpGzP5+EQpuK6OM7BiVMKrfkAsLACf/sx7RUeF9JDrzywex8H5YFS3Bp1Qrwjjr0erkAeHsdYvKSEXMuvX8OTkuaPC7RDF/rjF/67yYiLdPQe/lh9BiehE//DLw5CXBm7BqQsMYn4FbsYvhv6uA2psGhXwqbdi5suQ/B9jWDLZeBz2ewFzJYSmcapRXg6JE7LYSQNBP81XPRkbkFlsR4mNMfhTl7GsyHGP76jMHyJYM1h90j4NQxH0kdvU3Uc+cKYax01ZCYsDmbhRYoZrckF+j5gSy9TYT7obuRYD8aWsBRzK5LLtBtop96OMJ4cBSHbKF66QWM1NhjJIwHsRKaUQX0kgv4G6lKSGS8+OoJ1iMjtJCOFUgu0N1ARcJaEA7eShppiPdLLuCvp0P+BkK42AuGqwBlSC7gq6UP/HWEcPHoaZi7EKVILuCvpe2+WkK4dH1PsB0JFHDpaK3kAl0GWi/s+BOBQxtUgRJaLLmA7zta1mUgTASu8kABvoyelVzAW0MLbl8gTAQdxylAwFNGj0ku0HmRZt+uIUwE7hODAnwh+weZNE1yAWGl9p6lfzvPEcKl41iAgIPkis5qcndWE8LFWTJkBjTsN9kEvN/Q794qQrjYNYMCfCFrkk3Ac4ZaPZWEcHDrg84BDTsvn4CeDMJJGg6u0sCTmC9kpbIJdJyiCvdpQjjwuYG7EF/IvpBNwH2CDrtPEsaLU3fvNurQ0IeyCbiO0yfCITQeXBUES84wzwNF9LZ8AhX0rpDI/eKsIFgPD/9EZtNQkmwCznLa6ioj3C9C8iM+ExfRStkEHDp62VkiHERjw6Hre7UyylsJq4ael02ALyaFQyc+w4bEls9gPjiG90JamiObgEtLTwm7/GjweQzmTxna9zO0Hwgt8GcJPSibAPQ03a5hRmEFFvf4gr5B/OpugkLSt9QM7VljFMhjVRRJARC7eZCiRiWfotz5FCXLCj0VJF38B4MS8zw/PTEfAAAAAElFTkSuQmCC"></img>,
    <img className="mr-2" width="24" height="24" alt="Burger" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADP0lEQVR4nO2YW0hTcRzHj7t7oaSHCkqQinyoB8PclVroDm0MiaLo4oUuT0WgaaldBOeDKwwqA2VYNM1Fdjcl2rp4rczs5jJKTWWb08070oVevnHWgoJJnqnziOcDHxjnx86+X3b4HfgTBAsLCwvLbNH+QC0cMGlj3OXqA+5r6otuk9riuqZucZs0nW6Txu02aX54pT53/p6pLW6TppD6zoBJG0PdI6Chu68oRX1lZEK/kSzrN5LjrlISU/S7y6iqchnjU1w3lGEzFnzYoFrYV6LMdZYox/oubcJM6KTuXaLMHbyqXjCt4R3F8r29RYqh3mIFAmKRYoj6zSkHb7+wSugoFJc7CsXw5di9JIzdTfI5mybLqQx+hW8xxPBtBdGVtrPrMJGjdxIxemfPhPNpsSC6kspCu0B3/pqTPfq1+Fsq7Ojt3f9cC4Td+jUnaBf4ols92JUXhb8dubULI7d2/nMtQA7QL5CzAkySoEtHdgSYJEGXz0eWNHxOXwom+Cl9ST3hDzGNOjBBwl/mbIFWGVdrlXMc93csx3G9BlsrDmKjJRvSuhyQ1enYb0jE+bRY1GxehHNpYuwzJIGszvDMN5qzsKXiII7ptajYHonr2yNxVK/FlopD2GA5DkldDlRVGUgxJONMqhRV5GKcTpUi2ZCM+KoMz3yDORsJ1w8hNT8Bxm0rYYkNs5vXh2gmXeCDnGO3yjlolXM9vpdz8U7GxVsZz+MbGQ+vPfLRIuPjlYyPZpkAzVIBXkoFaPIoxAupEM+lQjzzKEKjVIQGSokI9ZJg1EmCUeu1RhKCp16fSELxWByKR14t4jCYxWE2OgXAwAKYP/9Am4Krsco5dgYVsD2MDVETdPnZRoAJEv4yZwu0etco3UfoTZwA1l18fDrMQ4+OB2cRF4M3ORivDfpvyK9NQWg9LPT9CDFhjb6MF+LtbgE+pvHRlc+D8zIXw9UcfGsOQp+Ri0ZV8LSuUXYLNTFhC4WfigMTJPxltoOHz+sC/aWqZ64yEkywv4xsoF0gYIdYxZOTdoEZPevxQ4IuXXlR9lk4PoFPdVGTf4n9oTNzmaYjK8LekRWB2bQ9M8LWkb2c/juAhYWFhYWFmAP8Am1VLXDcxP8IAAAAAElFTkSuQmCC"></img>,
    <img className="mr-2" width="24" height="24" alt="Noodles" src="data:image/png;base64,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"></img>,
    <img className="mr-2" width="24" height="24" alt="Ramen" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFSklEQVR4nO2Va0xTZxjHn9dFzGwFCtiSCtbhQIWBM5oM+bJk2ZK5ZTFZ/LpL1Gk6p06dCHFKN8ZVIBSmoZCZmEgkKCqdU6bO2QstvVgQ2NhEAm2hpVDonRba8iynZtnXSgstGb/kl/afnrd9/uf0vAdghRVWWHIQgMiPvcaSnUjJlh9P3iM7lvyZ7AirUMpl8qXcxFbp4USJ+BBjUHwgziXaHyddssH6izJjlMVZqeqirbmqcxl71WczuKqz6TxlQVqjoiBN2JXPUSlOc0blp1Lnuk6moPzrDSg/zkbZ0WSUfcXCzi+ZKOUmofRwIkoOMVByMB7F+2PFIQ8mq859daA+j93Lf2tnT82uj3qrdh3qrtjB6yl/U6Ap2/5zd0mOWlOcbXhSnOV/8l0mPuFtQ/X5Lag+l4Gqs+moLNyMyoI0VORvQsVpDnad2ohdJza4ZcfZQ/JjbKnsaHKr7AiT38ldf0bCTfhU8kXCu5KDjCzp/kR26Ge1Pq+zr2439tXmolNMR4eIjtO36Th1i46Ox7SA3aU5qPkhGzXfZ86peZmjat42lep8hlD1bUYjdQUUhWlc1ZnNe7vyObnKk5tTqSsV8mDB0l+X19HH3+36q2HH8PxTQK9mldfVAei8RzxU9nUT59Py7OzekjdYiEAgWvH3gCBQQA1a1y+A7gegpbL/KdyBaKa/Pq9T27wF53sA/RqCM3cBHUKCPjWgT7MKB+q2/PcXKs7CoO+BIG9i0YFYSUgF+up2S5wiWmBgx70YdNwCdHbEBLK+OQW7y7YvagFxOHahOQW4vQpAWxt47DcAZ2XgoTJKgAHLgVkZmOZkgPabMGVrBXQ/hikqz0pgOywHPGJomBUDun8Do/UaQdt1YqSyRwQSbIVXINpBCTA8j0Dn+R3Q2U4slqsEnUKwUNnzCPJhOeB5CHvcDwFn7oNh+grB6SvEEMgP4DksB/AuxM50ALo6wDN1maD5MvH8m2E54LwDH1IPMIcQDOYmguYmYqCy8w4MQrRj7YAEezvoHUJAy1VinRQQtDSDlcpOIXwD0Y6tDRrtNwGtrWCcuERwUkCMVLa1gXhZ7ELW6zBhuw5oaiDTpnqClhaYpbJHCm6vEma8ChjxKeCGTwmFXhV8gHJIRzUkYT/EBKTeyyGd+ow6hjqWWuN9sdblVcBzrxKuelWwb1FOiKWFuK0tBE18Mj9eSxUgSGXPY0DqeRBmB90ieCe8Ba4RvaWZoPkngsbqF69UdrQHttWw67oPftevcCIsw9va4XN7G1D7fkBjDUHjBYJTVIkrBO23AztT2LW3w7xTCJ8saOhNgmn7psZpjCY5jdO2oAtwBGbkCKaiTDMGXWBjw6R/Y4MZo8nUBrM/6AIplyadKZcmMbqccARdgH3RNLDh4gRGk+yLpj+CL1BnqGP/aMKost5UE3QBZtM4K7nOhNEks2mcFXSBQAm+8W8WfxyjQ+PASw0fKFA7/h6z1oDMWmNEXV9rxOTqibdhISTVjCmSagwYUavG5LBQOEXD8QlVo47E6jGMhAlVY/bX+c9iIRSYlUM5jEq9j3FhFJdYX1KVdieEg7hy/b74Sp0vvlKPS2KFzhdXrv8Ywgm9ZGxrbIXOGlehw0W1XGunVQ7lwKLAfxa7rnREtK5Mi+vKdGGXXqaVUb8Biw11huilw/200hGkl2pDklY6grQS7Z/xFbqFbZWhwCwZZ60504tri54jrXgYaSUjwVk8jGt5g7imoA+p74CIcroPQzLSrOYN6WN4Q7gQVxcN6SI9PzAu6PfEVeh0L7tVUmsYlbr3Iz3/Cv97/gFXFlOd+elT/QAAAABJRU5ErkJggg=="></img>,
    <img className="mr-2" width="24" height="24" alt="Chicken Biryani" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE30lEQVR4nO2ZSWwbZRiG/wLXUkounbEzXmJLLBUHDhySsZ3YTpzYlqiAAAJx4YDY7j3RVL3QCuElTmI78ZJy4MCBA0LizgE1SbN5S+J6ndhxKkSallAQDv7Q2B5nZjxe2o5DjPJKc3+e73//73cUhE5zmv9P1sIx62oktng7FD1YWoss3loNWVC3JByPW8MbcViPbsJqZAOWQ1FYWovArdXQJdQNicWTS9GtO8CXWFwLL6BuyGYi9WAjnoQ6ifXIA9QNiafSS5uJFPAlViKxg664E8lMxhJPZUBIomvuRDKbvR5PZkrNJE7snUhlc+OpDFVMpLPQ9CRO4p3I5grjaSpXTFM5SGW3oSKRFjyJlXDsZJ1ArlAYp3I7RSq3A5ntPNASyQx1mEynvxI6iVB0y9xRoAkdesarJ15164nPZ/TEt9N6IjI1KL0/NdgLrsHe4qROSjm10h+dGvyzO+HlD/KF3WKusAvb+QLQEmkqd5ihqPdZF3thM5H6PRZPLES3Ep2Bn5hAT7kNskGPUe53G4l9t1EGMwYZzOgJmKa/oV6YGioLgEsnhUn600rAY70IKz99Dzu7d4GWoHI7hxSVL8MfS4I62XNek/yL2RF51jsiB8+wHDxGOdACblrAwAgQZYHKKRwJOOlP11uWqJxE4Z1jAb9peKHHN6q4NmdS7s+aFDA7ogBawPsYAg6NBNyWlyEeDX3YcXC6Kr5R1ae+sb5936gS5uivJqCoCAxzBZgaNRNwaHCw9eMfdxTeZ1FeDIypfvGP9QH9PbmAtFKhqoCdxH7oGPy8ue9tv1n1MGBWQTsCnnYEdFwB2wCeEh0cEDozb1VfC1hUpYBFBe0KPNYJDGB/ii4QtKivBq1qCFbhA+Yq/KMKtLjEjk4IBK2qN4NWdYmGZwT8fAGTEsTYQo6yAP6raPBzIy89P29V7wct1ek3rA9LoNZ/IQHWQ9ZIgMTWRBMIWNU3apNvNP1mF7iNl9hZE8DBQeJgI7GbosB7jcpzQbPqDzY80/2G02fqw+n/kQC7PhwBDTP98veJKAJBi/LdCjR38gw8031m+q3r03qF2kn6FCSviCLgH1N9U544C5wD32T6R/u/QX0avcIktvfdOHpaJIG+dQ54U/jG029ZH27/PUis+Mb67voagLcHXz/9VvWxkdiAeAKjir854OzO8+D5m6fx9Ll/B3DXJ56kX3zRBGZNygIzbT74o8C3M31Heftgl5GYmTMpVmvQLPC6C1sHz66OcPcFHq/fbvT3nBVVYHZEMc+FPgJnd74lPH/zCEzfRuITSOx4hxXjfGju1KsXVgie6X3TzcP8fMbuzZDEefEFjMpzHqP8gA/Nn3pd5wV6z68Od/rYR6hTcRvlX9ZBc8D5F7bx5IXg7ST+s6ibh58ZC3HebSTutQRvBS9QHTuJPbRrL7yIOh23Qf66Wy/7pwZdBResTJvwNhIvfT2AvYeOK9N64kodtCB4a/hydQawq+g4AwidoSWm9ESJrgofvDZ11qqsdZ772pbsJH6lo71vlkmd9JJrSLrHBa+fujA8tmcnsf/+nxK+/p6zrkHisksnuV8HzqpMZdtI6MocOEj8ekd2/ZPE+ZrqWadO8pZTKwk4ddJlpxbPOzT4Xw4tnndqJLcdGsxv1154Q/SfCKc5zWmQUP4FL4Yzw/a9zlkAAAAASUVORK5CYII="></img>,
    <img className="mr-2" width="24" height="24" alt="Fish food" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEM0lEQVR4nO2Y21MTVxzHj4JCpaJAEgSVYMwGcKYXC7RRcuSh004v08fOdPrSTl/61hcRfaEprYxYSdIQRKi5mYRWH0pbbW21NUtrp38ExARMshvYzV6SqeJU8+skMFMkIUkdcuvkO/N72zP7/cw553c5CJVVVlllrRcmBUgVGpJ/qHHzFCaFmWNu/rjm94gUlRJAihAxyfchgC2oRAFgdWcu95JQiUoVAMch3LwJlTIAXoF4GZUyAHYLt1ExaK2pzmthUDpD0GgKQN3IXag57YXqQS/UDHmhQb8ALeYgvHCNXQXgY70ku6/Q/tHRX3no+JoBiSEAO88sQM3QPOw4PQ9PfeaD6k+9sP2TO7BN64HKjz1QMTCXMN/9YxienV6CF39iPiyYcbnWV113zn+yfiQAu876oXb4btYAeDVe+pmNqaZCFvQ2VOTVvERHvdEwEvDFze/+3P/EAHg1nv+eEVrsVGdWPz/kEJTtjugfKpsYI6zigtLCmwiLoMhmbd0wt0tioKwSPQUNuiBsFgAmBVDf5B4pnfSpjCY6nNGZdkcUVPYIEDYRlFYBFBZuWXGRO4W0sHWjddLRxedkBsojNdCQCwCcSK0CqFz0pQwAkeX1AActPCjMPLR+yU0hbXKVbDKF3m0cDd2TfUFDLgHwSnqFtq/obzcGcESZNAAgn2Qn137fbFrsaxoNxfaMhiAvAORKqFy0a6Mj9E16gDDsv8C+H2+69o4xuuaxJWgyLUK+ATRuAQhHcDAJoN0pvpkJoGWCYfeNM1f2nmcglwDqfh10H9WAul+fEuLIL1zsgDWIkyDaHNHf0gOwsP8CA7kG6O7B0NXVBV09eMOdOHx1KXJIC9uTUqnKHhEKDaDu1ycg1CcNGe5D0J60C0qr8AphE5YLCYCzjO7r7INkALvwaskCdEyJhMoWEQt9hHCWQbgo67/uAba0O6K3i+ES4ywifokfK65tDvGtYkmjOEMcucnFFJagZn0lns5YyCbZ9xKF7PzSSCELmdJFaf9zK9EywU6s/b55jDleiFaCcNHOJPOZmjn5ZNiZqplrNtHvNBpDf+WtmbtMT6c0v7IDETIJwMzfV5j5E+kenWSm0DMyAzWb63aacFEWlE7xKpxoJWziPaVV9B208ka5jW9FWajeyNZKDdRFiS4Y2/SB5kb4EeGi+lA+JDFQrzfoAt5NGym/Yzi5OXAY5VNK42xV3bnAid1n/fwTD/U3uIeEix5PNwnmXPXG2dqdw/6Pas8szGYL0PlD+H7bFDWtGPfIUNFIC1ul+vmeVhvl2TMWgPr4w9aQD6oG7/y9TTtHVQ7M3aoYmBs+cIn+ABWjOq8Gd2hI4dbj55t/0EtmlyCK0HwiLRpQ6Zrn/3ztOlShkjRP8ld6ycWnUbELuwU9Jvlw/Kxr3IIPu3nHsRkueQgvq6yyyvpf6B+PKAk35EzOSwAAAABJRU5ErkJggg=="></img>,
    <img className="mr-2" width="24" height="24" alt="Chocolate" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADaUlEQVR4nO3ZXUxTZxzH8bPbXXBO2XTODVqn0RxyDi0iUrBYJyKDoYkaXbNlxotlyRyKypsVoZJp1BnxjW26BCUmGrPM92QRsyVkWZaZeDUTh8hwtIKFilhEzZjsa47GRG9843nOxdZf8r39t5+ck/SiipJYYom98OoNx/shQ726wdQQkqFG6k1HkWLXrA+sMzSq01SqRll1mop1K2SqYfsA5sMvv8ufwjdznHydn8pX76bSOCuFPf632TXzLXbmjWeHbzwNM95ke+44tnnf4Mtsq7FsnT6WLVlj2DxtDBunvvbglnXTVkCVnsTeAteoAZunvf7gVgLwv3oCIVOjUiCgUk8iZCegztSoEAio0JOosxfgoEJXBQJUrJu2AWpNB+UCAeW6Sq2dgPWmgzUCAWt0lfW2AgwJAMNGQI3hYLVAwGpdpcZOwDrDwSqBgFW6yjo7AUHDQZlAQJmuErQXkEyZrgkEaFg3bQOsNZJZKRCwUtdYayeg2khmhUDACl3DupkAPO+qjGRKBT6BUl3DuqnYsXtdZ+6OXG9lOPoj8c4TDLQfpe/3Q3SfayL8yz4utzTwx+mtXPi+nvMHg5xrquTn3cv5adsntHyxlFPBRRwrn8+Rz+ZwcFkeBz7yEirQ2ZQ/BTj/qnTARbeX2KYKhjtPwu1WsQ21/sPt1oVSARGXhytONxcmmLR9vJh4yx64dVZgLQPcOZMiDdDt8mB11eWhy+mmLdWko3Au8aZa/o0dh8HTIjoLvCIV8Hhhl5vLTpO2jBxiG5Zzr70Zbh4dbZ/bBniU9Xp1Ot1cnJRBd+mH/P3rDrhx+CU7dE0KoGdiJs+qe2ImXe9M5dIED1cWFjP0XQ307Yf+5ufrevMI/QcqpQCuTZnOixSZnEXH5EwuZfvo3/IpIx27IbbvKe2N0vttoSJr0bQcXqaetBz+0rNpM7xEywIM/7YR+hqf6O4PNdDbOE6Rud50H6Mpmu4jYs6g3cghsnQBd04GGfmzgVjdMjqMXPm/xn0ZfkTV45lJZ7qP9vRcutx59Gb45QNiWfnITJG9fu9cZKbI3g1fETJTZG/AX4LMFNm7OXs+MlNkL16wAJkp0gGFi5CZIh1QvCQyWLwEGcWLF8v/o2+o5IOiwZJA+Na8ACIbLAmEh+YF3pMOSCyx/9juAyJCex1c2qV1AAAAAElFTkSuQmCC"></img>,

]

const listOfName = [

    "Cleaning",
    "Electricity",
    "Heat/Gas",
    "TV/Phone/Internet",
    "Ice-Cream",
    "Coffee",
    "Tea",
    "Pizza",
    "Pastry",
    "Shawarma",
    "Burger",
    "Noodles",
    "Ramen",
    "Chicken Biryani",
    "Fish food",
    "Chocolate",


]

export { listOfIcon, listOfName }