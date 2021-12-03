'use strict';

var AAVE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAC/VBMVEUAAAB7hLCCeK0ytsUwuMayU5+1UZ8/q8CTbKdqlbgxt8WBeK5Fpr+nW6KiX6S0UZ8ztsVgk7eUaqhdlLi0T59Rn7tUnLtdlbhCqsBuiLOsWKE4ssOzUZ42s8SvVaCtV6CjXaOfYqWQbalMob0vucWgYaW1UJ5qi7SuVaCoW6I5sMKvVqE0s8R/ea5sjrQ8r8J/eq53gbAvucZFp8CSbKgztsSqWKJSnruBeK2cZKYtucY3s8M4scIuusZAq8CEd61ikLeaZqawVKBNob1ZmLm2UJ5SnruRbal4frBGqL/////+/v6Ob6pqi7SQbalojbVCqsBXmrpdlbiUa6iWaaiHdKxUnLulXaNPoLw+rcFviLOeY6VEqb+McaugYaVTnrupWqJJpb5sibRRn7yaZqaiYKSSbKlgk7dMor2Jc6tbl7mBea43s8NamLlArMF1g7GKcqs6sMJlj7ZnjrZyhLJjkbeYZ6enXKNhkrdGp79kkLZ9fa+XaKetV6GFdqw9r8JLpL1whrJ4gLCcZKZHpr5YmbqrWaF/e66Ed62bZaajX6N7fq9elLh2gbF6f7CwVaA0tcQ5scOuVqBNob2zUp81tMR+fK+xVKBxhrN0hbK9Vab5+vxuirR4hbN5gbDv8PUwvcvq7vNth7Nrfa7JzN0xwtCOc6zb2+hKqMB4dqyzWqdXp8Vudavm5+/U0OFlk7l0irZJkLVRh7GEfLCKeK98ZaX09vnj7fLg4ew3v8+yss5fmbtukbp9hLaGg7Z+gbGccLFmgrC4U6LJ3Oc4uMlOp8E/n7x5jrtSlrh0fK78/P3Dwtipsc1HsspErsSVosNmocNcnb6blr5chLFjea18b6qFaKfW5e2vztyvp8eGnsCLjLimaa5deaxrbahybKelYafR3OfN1+S0u9KavdE/us6Ots10tco5ssRql8BYob8eoLtBlbeQf7WTdbKYbaxmdauuYau5XKu7xNieoMMwpr6fjrpVj7WDfrS72OKqw9Yhmbgwk7WFbqpHfq1bXanXAAAASnRSTlMAA/7+/vz8GRgH5jcN++njh4J4UCH8+uno5NrGh3d3Pg394NvY1s6xqFA9NCglIfHnybGsq5qZko5cV00z79nW1ca/dfzuxJRvWz+Bp3IAAAtiSURBVFjDnZkHVFRHFIZXCKGo2KJiwx5bjL3FrqmLPRoRlNgRwUJQLIQkoGJBsEZBWLp0BQRsVFGaBUXFXmPvLYmmnty5M7v3vccDJbPHdsTP/9z7zy2DptJTrRr72ax6h7o9h7a1tLRvaWnZtm176w6dzOhvq3iIa169bs9Ws3Nzc5/NXLtihb2Dw40bL168qNm4vXVz8/9Nh3/UovoXrUY8zX02++vx4793B7Z9SweHWevW1Vzy4mV8zca9m7fAL6u64s59B6c9jY4eMWLUbMGeucLe3mHWrHUTl9SsOdUnPj6+cdMPqqocwV2fpDk5TZkC6FGjSLcDsicumTrVx8cn/mWt3gxeFbBZX6M3qWt+mODktBDYDM3YMxnbntienp7b402amhH87eQvu2Y7GxkBeoLTQgnbHdks3Mj2AfbmDdt31OpH7LeAq3fLerNttbMzsicsnKJnQ0jc1661RzagUffmzRtM8vKGNX9Hyd5Zvr4ewBa6OXs2sjGVgs3QnG2y431rEl4huUa7rJAQf18POZtsQuEm9naTrTvatyC2OvnjboUL/EK8GXs1sgGNbH249ex1nD2VhRvYJjs+/IDYauTOjQoDAxf4eSObh1thE3eyIIabp3L71veJrUqu3ijZK2DRAqF7mxr7e7SgNJWoeyuwa3Uidnlypp2d1yLG9vaXssmCIpXE1luQsT8jtjLOjTKnT7ezC9CzPZCttLdaKj0h3KibYiIjmw3JHDlyegTX7QdshQWRTdVEbhPB/tBMld3uweiRwAbZXoHIfncLehrYw4hMous8cHMTbC+vQEylsIlzVdhNAaUg10tavBzZEG4IiYyNaLQJsMWNp2pCFgT0+3kdBJtS2DBp+fLvJGy0IIab2JJqQvaeKGOb5IlUErrdqaVLFwN7tJTt7U1stVRK7U0WbI9oCkeG43pHYkd4Cd08JAZ2dDSx1aoJsjEkVJOGlI5b7+i4mNiQSkQjm+suS09PP3cumjWdr4mttCBzIFQqcsepT+cCe6mejTcHcolsUanKTu+G8zuyuU1mqtpE7hLThqvmzR03zpGxAc3ZXjJ2atlBGy0cm4ucra6bhzvvsw9I9MNP5wGb65an0o+zt8WdPqq1gaMNYrqpmlBDo1SaoGwkm7Z+OBZkC91kEy9uE7R3XIyWq9buPierVLyhzZJWKjAg3nf4MTyhwTfqbLLg5SCtOHufSG+lu5oFTXZYc9nmnzM0Z6+XWtAuIgDYLNw5145pDedYOlhQOpusoHBD04EqaAImQdEDbOt/+w1jY7hBN7uWhkrFG0NWuBbiHLOf/bwLCyxasCKbmGyFyg2fPgn1ZyAbdaNs1E23Uvf8uNYGPhcv8l+YbLKgoqEhmyfSvHW+7YxvGXsVsrm9MSS8MYAFi2OY3PDs7FAU/4+0MRB7IlkwrxabYzvWn7NFz0YLct1ob1EFIy/ZMG9EXb++m/nk6O/Eljc0iokJG3qG58+ZYzsD2eVtguzAs1GMGHQ6DtyN/0d6mqKhrVXOPfHWgO5xYg7IJvY4Yo9kbLBJIcZhf7GHRxwmMjSNqiDdShn7ZXsN3JfYn35CttQmUGG/01sw+eotzN7xxByPuIP424PpaapNh+ae+MZmmo4l06YB21aEe+w8YnPdwXYRKDX8crG/b9xlnkis3tR0yo/enhuaa746sXLltGlzSDelkrODD53UYoCf67z9c65h2G1Ol8nnnnIzlc/LfppmiKaYMAsSG0ISfOYXJjToZCRDx/0axP60Oz1NsMkm8vE43hqyuGwZsBlaaUFhk8K9mMSzOlYEcxJ3wZ+gkNDcQw1Nyo7vrWlSMnkysEG2iPdYAzspKcnNLXPPK6x5xyN1OqhUIYmQSCwkaYI9Sn2mih+mGVQyZjLpFuxVaO/Xe9g5gzLDI66ejYTqHVIMNxLgu1J/4KmkSkVs1N1YY1UyRrAN9hYWfP3nvtBw+GCdDgoNDX+lY+zEKJR9sWyNxCblNzRAd5kPaM6WWnBuRsqfWuWJAt26RJHIsjU41itSSbOJpWbSJGAz3QwtZc/bBwR2ONaGJU+3yA/Y+/HaX+ZbVIVzT01Nlx8nzZ8PulG21N5F57XExaMND4QKC4nkHeF6aqUzFUOjbsEmC85LuXtUGZBbh3CEzcJEhqc6rxHhVrWgpcbqfjm2qCZFdw/fPAxRYX745SZ8jh/CbUSXeIwXkuupRriNqNrkhqVmEKKRvRLtLQlJSkrKeYzrpX/PwDlkx6r3Al3kySAmOybO2UiwlU2HPW601TQ54gpsnkpeTWwN7Iyiu1g+bu7JZDc+GHq8HTQdXWQMLyTAFjERISELtrwxVNPriKuULauCGSmHkXF7TxI1Ha9FuueQSOw6qbShKapJyyu9Nc0OuHI2oDmbLFh0CstH+Hpp0wmAXqkLxY6QTeOxgg3oupr+B1w3EVtm79K/L2C+LuxJMrBRdmBkFP7FrWuperbykWDFlQ6ajhtdNm1CNGeDbINNSpk/tHsvvV4qn6kCI09ij9xf2RbVSWPa5oiLC7BVLPj4Lmo7nOIIzVI0BtQdEMgSCZ9f45BtuPHEvtIWHmC6H3BB3fxWEhvQ53kSUzJgpgLZFJPks7f4aJm4bTWxyYLu7ld6ajSQx5+BLbWJCLftPbRveFEGzmvYdBgbR+/kUIxVtm8Fi3xuXTbiGBtL2FRNHv71B1bPCykZ1ND0Nkk+yxN57FqObJEne7MRp4ZF2EZkKy2YEI438VSRoqHhsh15CRO5yx9kl7fg+GetzNmk2uvARhV2/l+3eRIfq8xUcOMjYvTDCdkE2CM4O/cLnFQ7hhkbb3QRNiELFmAStbcfl+pnKmZBmnv4sBNT7E+LvJPBgs+q4+xu3mQnyEbdaG9sDLEF93CE3FcgnaloXguOKOTxulwslm0jSUPLHWrOd5lmO42NAU4WBHb+o8M8iX8/lLENy3byVZ7IqGs59JakZ4M/+C5jahGGbBFutHfsb/tQVIKtYu5BNsq+FISJLMb3NdmyHd3KTL+C1QbZxhAT1I2p5GhIYoGhx4vNktiHYnD9iAwpt8g/RdF4TAe+9x6mknTHPvqDbVv3CmZg9RZs2qJwFmRb2SsYBRkbLchTyUTj4bKRzS04iesec2Hf+XsFW7ZgZxBzj5K9f9dx3FoFW6SSiab1v02YsWCTTX579KiANwbFFgXs0ZwNExU9EgAbU5k2GNZ/kv1J2Hugm6FdXA3hhoPVRDbWExvCHZzMFnl678GGltaPkel0FyEx2ETMVLK5hx4JqHgDm+sWqTR60lPxivPRwDAKt+Tq8LmHZiqyoNojAYQktWtnQlNIiC2vgjQel9/QImiRxxv/RhEOrFI7ib2JNx1qDMRG2RKbRNghW5/K7L5KMi8lmEpub2SXa5b0SLBYUgUp3L7Z3cyVXLzvbeRsQFNMlJuOI1/kRbj17KzB9PApT6WFigXFTEVs9UcCZGdRCpXsAQORrd50xK0ktnzugXBn+WGVroBtQRaUzWsV24SeSpMbEVktJhBvKXu+qgWp6dCbTEBht4+JrJpLuJaAFtVEzqYtqnzTsStshxmsjF2tdhg2BlmzXCZhK5oOT2VmcJ1qSK6UrfnEYic1Hdqi5BuanJ3ZqJ6mMjIFvHtY2EZlswTZ6o8Ey90y3dpRmN8qHLIpq1QUbrKgYCc9GEKS38qG3tDM4sARl4pGWGpojkkPGtapQd/NfCfhprUBfv++KzY0qiZym2ScaljHlCS/G1sPP8KLoIRti+wGDcaWlgowkaugvH8vC9c7dzCTaBPOrl+//oyEhAYN+9QjxVU7qKZG/9pNuty5c+JESQmzSWxsfn5+AnA/71Ovhv5r/h8cZ8IB/ZvV7tFkkJXVspVWVq1b9+gzvN5H+E30ysH/AeKVq05QNm3FAAAAAElFTkSuQmCC";

module.exports = AAVE;
//# sourceMappingURL=aave.png.js.map
