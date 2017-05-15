﻿using System;
using System.Collections.Generic;

namespace Microsoft.Crest.Web.API.Models
{
    public partial class Supplier
    {
        public Supplier()
        {
            Service = new HashSet<Service>();
            SoW = new HashSet<SoW>();
        }

        public int SupplierId { get; set; }
        public string SupplierName { get; set; }
        public bool? IsCrest { get; set; }

        public virtual ICollection<Service> Service { get; set; }
        public virtual ICollection<SoW> SoW { get; set; }
    }
}
